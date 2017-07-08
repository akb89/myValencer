'use strict'


const React = require('react');
const _     = require('../../../../modules/lodash');
const moment = require('moment');

const ClientActions = require('../../../actions/ClientActions');
const ClientStore = require('../../../stores/ClientStore');
const MetaTemplate = require('../MetaTemplate');
const Page = require('./Page');

class TemplateScreen extends MetaTemplate {
    constructor(props) {
        super(props);
        this.state = _.merge({customers: []}, super.state);
    }

    playSound() {
        var elt = this.state.events.opts.sound_elt;
        var filename = this.state.device.sound.filename;
        var path     = "/sounds";
        filename     = `${path}/${filename}`;

        elt.innerHTML='<audio autoplay="autoplay"><source src="' + filename + '.mp3" type="audio/mpeg" /><source src="' + filename + '.ogg" type="audio/ogg" /><embed hidden="true" autostart="true" loop="false" src="' + filename +'.mp3" /></audio>';
    }

    handleInitData(obj) {
        super.handleInitData(obj)
        this.setState({ desk: obj.desk });
    }

    mergeLocalStorageWithBuffers(localCustomers, bufferCustomers){
        var end = _.unionBy(localCustomers, bufferCustomers, "timestamp")
        end     = _.orderBy(end, ['timestamp'], ['desc']);
        end     = end.slice(0, this.state.device.slots);
        return end;
    }

    updateScreen(did, data){
        if(_.findIndex( data.info['prequal_screens'],
            idx => {return idx == did}) === -1){
            return;
        }

        var info = {
                ticket: data.info.ticket,
                prequal_name: data.info.prequal_name,
                desk: data.desk_name,
                dummy: false,
                digital: data.info.digital === "true" || data.info.digital === true,
                customer: data.info.contact,
                timestamp: data.info.new_timestamp
        };

        var customers = _.cloneDeep(this.state.customers);
        customers.pop();
        customers.unshift(info);
        this.setState({customers: customers});
        localStorage.setItem('customers', JSON.stringify(customers));

        if(this.state.device.sound.play){
            this.playSound();
        }
    }

    removeFromScreen(data) {
        var found = _.findIndex(data.screens, (o) => {return `${o}` === `${this.state.device._id}`});
        if(found === -1){
            return;
        }

        var customers = this.state.customers;
        for(var customer of customers){
            if(customer.ticket === data.ticket){
                customer.customer = "";
                break
            }
        }
        localStorage.setItem('customers', JSON.stringify(customers));
        this.setState( {customers: customers} );
    }

    updateData(data) {
        var ls = localStorage;
        if(this.state.device._id !== data._id){
            return;
        }

        var customers = ls.getItem('customers') ? JSON.parse(ls.getItem('customers')) : this.state.customers;

        if(!customers) customers = [];
        for(var i = customers.length; i < this.state.device.slots; i++){
            customers.push(this.dummyCustomer());
        }

        var last_called = []
        for(var i in data.last_called){
            var lc = data.last_called[i];
            last_called.push( {ticket: lc.ticket, customer: lc.name, desk: lc.desk.name, timestamp: +moment(lc.timestamp), dummy: false, digital: lc.type !== "family"} );
        }

        if(last_called.length > 0){
            customers = this.mergeLocalStorageWithBuffers(customers, last_called);
        }
        ls.setItem('customers', JSON.stringify(customers));
        this.setState( {customers: customers} );
    }

    registerSocket(socket) {
        super.registerSocket(socket);
        socket.on('next', (data) => {
            this.setState({notConnected: false});
            this.updateScreen(this.state.device._id, data);
        });

        socket.on('update_screen', (data) => {
            this.setState({notConnected: false});
            this.updateData(data);
        });

        socket.on('remove_from_screen', (data) => {
            this.removeFromScreen(data);
        });

        socket.on('notify', (data) => {
            if(data.device_id === this.state.device._id) {
                toastr.success(data.message);
            }
        })
    }

    checkProgressCMS() {
        if(!this.state.customers) return false;
        if(!this.state.device) return false;
        if(!this.state.desk) return false;
        if(this.state.customers.length === 0) return false;
        return true;
    }

    renderPage(pageNumber) {
        var props = {
            device: this.state.device,
            suborg: this.state.suborg,
            customers: this.state.customers,
            devices: {
                desks: this.state.desk
            },

            page: this.state.template.pages[pageNumber],
            events: this.state.events,

            onSend: this.onSend.bind(this),
            onClicked: this.onClicked.bind(this),
            onRenderTemplate: this.onRenderTemplate.bind(this),
            dummyCustomer: this.dummyCustomer,

            disabled: this.state.disabled || false,
            notConnected: this.state.notConnected || false
        }
        return <Page {...props} />
    }

    dummyCustomer() {
        return {
            desk : '?',
            prequal: {
                name: '-'
            },
            ticket: '?',
            dummy: true,
            digital: true,
            customer: '?',
            timestamp : +moment()
        }
    }

    render() {
        var c = super.render();
        if(!c) {
            if(!this.checkProgressCMS()) {
                return this.renderInProgress();
            }
            return this.renderPage(this.state.currentPage);
        }
        return c;
    }
}

class Screen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TemplateScreen
                store={ClientStore}
                actions={ClientActions}
                did={this.props.params.did}
                token={this.props.params.token}
                prequal_url={'/api/init_data'}
                template_url={'/api/get_template'}
                type='screen'
            />
        );
    }
}

module.exports = Screen;

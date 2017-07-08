'use strict'

const React = require('react');
const _     = require('../../../../modules/lodash');

const ClientActions = require('../../../actions/ClientActions');
const ClientStore = require('../../../stores/ClientStore');
const MetaTemplate = require('../MetaTemplate');
const Page = require('./Page');

class TemplateDesk extends MetaTemplate {
    constructor(props) {
        super(props);
        this.state = super.state || {}
    }

    handleInitData(obj) {
        super.handleInitData(obj);
        this.setState({
            screen: obj.screen,
            desk: obj.desk,
            machine: obj.machine
        });
    }

    updateData(data) {
        var device = this.state.device;
        if(this.state.device._id === data.device._id){
            device = data.device
        }

        this.setState({
            desk: data.desk,
            machine: data.machine,
            suborg: data.suborg,
            device: device
        });
    }

    updateDataFromREST(data) {
        if(data.hasOwnProperty('ticket')){
            this.setState({
                ticket: data.ticket
            });
        }

        if(data.hasOwnProperty('change') && data.change === "RemoveName"){
            this.onRenderTemplate({okRemove: true});
        }
    }

    registerSocket(socket) {
        super.registerSocket(socket);
        socket.on('update', (data) => {
            this.setState({notConnected: false});
            this.updateData(data);
        });

        socket.on('notify', (data) => {
            console.log("NOTIFY", data, this.state.device);
            if(data.device_id === this.state.device._id) {
                toastr.success(data.message);
            }
        })
    }

    checkProgressCMD() {
        if(this.state.screen && this.state.desk && this.state.machine) {
            return true;
        }

        return false;
    }

    renderPage(pageNumber) {
        var events = this.state.events;
        events.opts.ticket = this.state.ticket;
        var props = {
            device: this.state.device,
            disabled: this.state.disabled || false,
            notConnected: this.state.notConnected || false,
            suborg: this.state.suborg,
            devices: {
                desk: this.state.desk,
                machine: this.state.machine,
            },
            page: this.state.template.pages[pageNumber],
            onSend: this.onSend.bind(this),
            onClicked: this.onClicked.bind(this),
            onRenderTemplate: this.onRenderTemplate.bind(this),
            events: events
        }
        return <Page {...props} />
    }

    render() {
        var c = super.render();
        if(!c) {
            if(!this.checkProgressCMD()) {
                return this.renderInProgress();
            }
            return this.renderPage(this.state.currentPage);
        }
        return c;
    }
}

class Desk extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TemplateDesk
                store={ClientStore}
                actions={ClientActions}
                did={this.props.params.did}
                token={this.props.params.token}
                prequal_url={'/api/init_data'}
                template_url={'/api/get_template'}
                type='desk'
            />
        );
    }
}

module.exports = Desk;

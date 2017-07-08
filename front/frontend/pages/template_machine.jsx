'use strict'

const React = require('react');
const _     = require('../../../../modules/lodash');

const ClientActions = require('../../../actions/ClientActions');
const ClientStore = require('../../../stores/ClientStore');
const MetaTemplate = require('../MetaTemplate');
const Page = require('./Page');

class TemplateMachine extends MetaTemplate {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        super.componentDidMount()
        this.setState({
            enable: undefined,
            already_in: false
        });
    }

    handleInitData(obj) {
        super.handleInitData(obj);
        this.setState({
            enable: {
                sms: obj.suborg.sms.activated,
                email: obj.suborg.email.activated,
                name: obj.suborg.undigital
            },
            screen: obj.screen,
            desk: obj.desk,
            machine: obj.machine,
            prequalifications: obj.prequals
        });
    }

    updateDataFromREST(data) {
        if(data.hasOwnProperty('already_in')){
            this.onRenderTemplate({
                already_in: data.already_in,
                ticket: data.ticket,
                timestamp: data.timestamp,
                wait: data.wait,
                meeting: data.meeting,
                aborted_meeting: data.aborted_meeting ? true : false,
                no_meeting: data.no_meeting ? true : false
            });
        }
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

    registerSocket(socket) {
        super.registerSocket(socket);
        socket.on('update', (data) => {
            this.setState({notConnected: false});
            this.updateData(data);
        });

        socket.on('notify', (data) => {
            if(data.device_id === this.state.device._id) {
                toastr.success(data.message);
            }
        })
    }

    checkProgressCMC() {
        if(this.state.screen && this.state.desk && this.state.machine && this.state.enable) {
            return true;
        }

        return false;
    }

    renderPage(pageNumber) {
        var events = this.state.events;
        var props = {
            device: this.state.device,
            enable: this.state.enable,
            disabled: this.state.disabled || false,
            notConnected: this.state.notConnected || false,
            suborg: this.state.suborg,
            prequalifications: this.state.prequalifications,
            devices: {
                desk: this.state.desk,
                machine: this.state.machine,
                screen: this.state.screen
            },
            page: this.state.template.pages[pageNumber],
            onSend: this.onSend.bind(this),
            onClicked: this.onClicked.bind(this),
            events: events
        }
        return <Page {...props} />
    }

    render() {
        var c = super.render();
        if(!c) {
            if(!this.checkProgressCMC()) {
                return this.renderInProgress();
            }
            return this.renderPage(this.state.currentPage);
        }
        return c;
    }
}

class Machine extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TemplateMachine
                store={ClientStore}
                actions={ClientActions}
                did={this.props.params.did}
                token={this.props.params.token}
                prequal_url={'/api/init_data'}
                template_url={'/api/get_template'}
                type='machine'
            />
        );
    }
}

module.exports = Machine;

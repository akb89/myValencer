import React from 'react';
// import Auth from '../components/auth';
import UnauthorizedComponent from './unauthorized_component';
import InProgressComponent from './in_progress_component';
import Store from '../engine/requester/store';
import Messages from '../engine/requester/messages';
import APIActions from '../engine/requester/actions';
import URLUtils from '../utils/url';
import SocketUtils from '../utils/socket';
import { API_CALL } from '../engine/requester/api_middleware';

class Action {
    constructor(entity) {
        this.entity = entity;
    }


}

class ClientComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            suborganization: null,
            device: null,
            socket: null,
            unauthorized: false,
            prequalifications: [],
            waitings: {},
        };

        this.unsubscribeFromReduxStore = null;
        this.handleChange = this.handleChange.bind(this);
        this.actions_count = 0;
        this.actions = [{
            [API_CALL]: {
                method: APIActions.GET,
                path: '',
                sendingType: Messages.REQUESTING,
                successType: Messages.REQUEST_GET_SUCCESS,
                failureType: Messages.REQUEST_FAILED,
                entity: 'device',
            },
        }];
    }

    componentWillMount() {
        this.unsubscribeFromReduxStore = Store.subscribe(this.handleChange);
        this.callInitActions();
    }

    componentDidMount() {
    }

    componentDidUpdate() {
        if (this.state.device != null
                && this.state.suborganization != null
                && this.state.socket == null) {
            this.connectSocket();
        }
    }

    componentWillUnmount() {
        this.unsubscribeFromReduxStore();
        this.disconnectSocket();
    }

    disconnectSocket() {
        if (this.state.socket != null) {
            this.state.socket.close();
        }
    }

    registerSocket(socket) {

    }

    connectSocket() {
        const device = this.state.device;
        const suborganization = this.state.suborganization;

        let socket = null;
        if (this.state.socket == null) {
            socket = new WebSocket(URLUtils.get_ws_url(window.location));
            this.registerSocket(socket);
        } else {
            socket = this.state.socket;
        }

        socket.onopen = () => {
            this.setState({ disabled: false, notConnected: false });
            socket.send(SocketUtils.emit('id', { _id: device._id }));
            socket.send(SocketUtils.emit('subscription', { __ws_room: suborganization._id }));
            socket.send(SocketUtils.emit('register device', device));
        };

        socket.onmessage = (event) => {

        };

        socket.onclose = () => {
            this.setState({ socket: null, disabled: true, notConnected: true });
        };

        this.setState({ socket });
    }

    initData() {
    }


    callInitActions() {
        this.actions_count += 1;
        const idx = this.actions_count - 1;
        if (idx < this.actions.length) {
            Store.dispatch(this.actions[idx]);
        }
    }

    handleChange() {
        const state = Store.getState();
        if (state.type === Messages.ASK_FOR_DEVICE_INFORMATION) {
            return true;
        }
    }

    handleInitTemplate(template) {
        const events = {
            opts: {},
            footer: {},
            middle: {},
            header: {},
            prequal: {},
        };

        for (const i in template.pages) {
            const page = template.pages[i];
            const trigger = page.trigger;
            const [type, event] = trigger.variable.split('/');
            const tvalue = trigger.value;
            events[type][event] = events[type][event] || {};
            if (tvalue) {
                events[type][event][tvalue] = i;
            } else {
                events[type][event].NA = i;
            }
        }

        this.setState({
            template,
            events,
        });
    }

    checkProgressCC() {
        if (this.state.suborganization &&
            this.state.device &&
            this.state.socket &&
            this.state.template &&
            this.state.prequalifications.length > 0) {
            return true;
        }
        return false;
    }

    renderInProgress() {
        return (
          <InProgressComponent />
        );
    }

    renderUnauthorized() {
        return (
          <UnauthorizedComponent />
        );
    }

    render() {
        if (this.state.unauthorized) {
            return this.renderUnauthorized();
        }

        if (!this.checkProgressCC()) {
            return this.renderInProgress();
        }
        return null;
    }
}

export default ClientComponent;

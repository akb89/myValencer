const React = require('react');
const cx = require('classnames');
const co = require('co');
const _ = require('../../../modules/lodash');
const ClientComponent = require('./ClientComponent');

class MetaTemplate extends ClientComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        super.componentDidMount();
        this.setState({currentPage: 0});
    }

    onSend(url, type, data) {
        this.getAuthentificationInfo().then(_info => {
            this.props.actions.send(url, type, _.merge(data, _info), `${this.state.device.type}_token`);
        });
    }

    onRenderTemplate(opts) {
        var merge  = _.merge(this.state.events.opts || {}, opts);
        for(var k in opts){
            var val = opts[k];
            if(val === undefined || val === null){
                delete merge[k];
            }
        }

        this.setState({events: {
            opts:  merge,
            middle: this.state.events.middle,
            footer: this.state.events.footer,
            header: this.state.events.header,
            prequal: this.state.events.prequal
        }});
    }

    onClicked(event, type, opts, evalue){
        this.onRenderTemplate(opts);

        if(type == "*"){
            for(var t of ['header', 'middle', 'footer']){
                if(!this.state.events.hasOwnProperty(t)){
                    continue
                }

                var evt = this.state.events[t];
                if(evt.hasOwnProperty(event)){
                    type = t
                    break;
                }
            }
        }

        if(this.state.events[type] && this.state.events[type][event] !== undefined){
            var pageNumber = 0;
            if(evalue && this.state.events[type][event].hasOwnProperty(evalue)){
                pageNumber = this.state.events[type][event][evalue];
            } else {
                pageNumber = this.state.events[type][event]["NA"];
            }
            this.setState({currentPage: pageNumber});
        }
    }

    renderPage(pageNumber) {
    }

    render() {
        return super.render();
    }
}

module.exports = MetaTemplate;

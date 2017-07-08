'use strict'

const React = require('react');
const cx = require('classnames');
const co = require('co');
const _ = require('../../../../modules/lodash');

const RegistrationHelpWidget = require('../widgets/headers/registrationandhelp.js');
const TimePeople = require('../widgets/headers/timepeople.js');
const BasicScreenHeader = require('../widgets/headers/basicscreenheader.js');

const DigitalInput = require('../widgets/middles/digitalinput.js');
const DigitalInputList = require('../widgets/middles/digitalinputlist.js');
const FullPrequal = require('../widgets/middles/prequalfull.js');
const FlexPrequal = require('../widgets/middles/prequalflex.js');
const ListPrequal = require('../widgets/middles/prequallist.js');
const FlexChildrenPrequal = require('../widgets/middles/prequalchildrenflex.js');
const FlexLang = require('../widgets/middles/langflex.js');
const SMSRegistration = require('../widgets/middles/smsregistration.js');
const MeetingRegistration = require('../widgets/middles/meetingregistration.js');
const NameRegistration = require('../widgets/middles/nameregistration.js');
const ThanksRegistration = require('../widgets/middles/thanksregistration.js');
const CCRegistration = require('../widgets/middles/ccregistration.js');
const Slider = require('../widgets/middles/slider.js');

const BasicScreen = require('../widgets/middles/basicscreen.js')
const SimpleScreen = require('../widgets/middles/simplescreen.js')

const BasicDesk = require('../widgets/middles/basicdesk.js')
const BasicPauseDesk = require('../widgets/middles/pausedesk.js')
const BasicCloseDesk = require('../widgets/middles/longclosedesk.js')
const BasicRedirectDesk = require('../widgets/middles/redirectiondesk.js')

const Onliner = require('../widgets/footers/onliner.js');
const ButtonOnliner = require('../widgets/footers/buttononliner.js');
const NameOneliner = require('../widgets/footers/nameoneliner.js');
const OpenDesk = require('../widgets/footers/opendesk.js');

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    renderWidget(type) {
        var w = this.props.page[type]
        if(w === null || w === undefined) return null;
        if(w.widget === null || w.widget === undefined) return null;

        const Widget = require("../"+w.widget.file);
        var props = _.cloneDeep(this.props)
        props.widget = w;
        props.widgetType = type;
        delete props.page;
        return <Widget {...props} />
    }

    render() {
        return (
            <div>
                <div id="header">
                    {this.renderWidget('header')}
                </div>
                <div id="middle">
                    {this.renderWidget('middle')}
                </div>
                <div id="footer">
                    {this.renderWidget('footer')}
                </div>
            </div>
        );
    }
}

module.exports = Page;

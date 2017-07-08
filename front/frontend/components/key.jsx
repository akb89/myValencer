import React from 'react';
import PropTypes from 'prop-types';

class Key extends React.Component {
    onKeyClick(val) {
        return (e) => {
            e.preventDefault();
            this.props.onChange(val);
        };
    }

    render() {
        const digit = this.props.digit;
        let style = {};
        if (this.props.primaryColor) {
            style = {
                backgroundColor: this.props.primaryColor,
                color: '#FFF',
            };
        }

        const extra = this.props.noExtraSize ? '' : 'extra-size';

        switch (digit) {
        default:
            return (
              <div style={style} className="button key is-unselectable" onClick={this.onKeyClick(digit)}>
                <i className="fa">{digit}</i>
              </div>
            );
        case 'BCKSPACE':
            return (
              <div style={style} className={`button key is-unselectable ${extra}`} onClick={this.onKeyClick(digit)}>
                {this.props.backspace}
              </div>
            );
        case 'ENTER':
            return (
              <div style={style} className={`button key is-unselectable ${extra}`} onClick={this.onKeyClick(digit)}>
                {this.props.enter}
              </div>
            );
        case ' ':
            return (
              <div style={style} className="button key space-bar is-unselectable" onClick={this.onKeyClick(digit)}>
                <i className="fa fa-keyboard-o" />
              </div>
            );
        }
    }
}

Key.propTypes = {
    onChange: PropTypes.func.isRequired,
    digit: PropTypes.string.isRequired,
    noExtraSize: PropTypes.bool,
    primaryColor: PropTypes.string,
    enter: PropTypes.node,
    backspace: PropTypes.node,
};

Key.defaultProps = {
    noExtraSize: false,
    backspace: <i className="fa fa-arrow-left" />,
    enter: <i className="fa fa-check-square" />,
};

export default Key;

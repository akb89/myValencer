import React from 'react';
import PropTypes from 'prop-types';
import Key from './key';

class PhonePad extends React.Component {
    constructor(props) {
        super(props);
        const k = this.renderKey.bind(this);
        this.keyboard = [
            [k('1'), k('2'), k('3')],
            [k('4'), k('5'), k('6')],
            [k('7'), k('8'), k('9')],
            [k('BCKSPACE', this.props.cancelColor), k('0'), k('ENTER', this.props.okColor)],
        ];
    }

    renderKey(k, color) {
        return idx => <Key
          primaryColor={color}
          noExtraSize
          onChange={this.props.onChange}
          digit={k}
          key={idx}
          backspace={<i className="fa">C</i>}
          enter={<i className="fa">OK</i>}
        />;
    }

    renderRow(row, idx) {
        return <div key={idx} className="keyboard-row">{row.map((key, i) => key(i))}</div>;
    }

    render() {
        return (
          <div className="hero is-fullheight">
            <div className="hero-body">
              <div className="container is-fluid">
                <div className="keyboard-container">
                  <div className="keyboard">
                    {this.keyboard.map((row, i) => this.renderRow(row, i))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

PhonePad.propTypes = {
    onChange: PropTypes.func.isRequired,
    primaryColor: PropTypes.string.isRequired,
    cancelColor: PropTypes.string,
    okColor: PropTypes.string,
};

PhonePad.defaultProps = {
    cancelColor: '#FDD835',
    okColor: '#4CAF50',
};

export default PhonePad;

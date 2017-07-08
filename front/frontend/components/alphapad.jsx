import React from 'react';
import PropTypes from 'prop-types';
import Key from './key';

class AlphaPad extends React.Component {
    constructor(props) {
        super(props);
        const k = this.renderKey.bind(this);
        this.keyboard = [
            [k('A'), k('Z'), k('E'), k('R'), k('T'), k('Y'), k('U'), k('I'), k('BCKSPACE')],
            [k('O'), k('P'), k('Q'), k('S'), k('D'), k('F'), k('G'), k('H'), k('J'), k('K')],
            [k('L'), k('M'), k('W'), k('X'), k('C'), k('V'), k('B'), k('N'), k('ENTER', this.props.primaryColor)],
            [k(' ')],
        ];
    }

    renderKey(k, color) {
        return idx => <Key primaryColor={color} onChange={this.props.onChange} digit={k} key={idx} />;
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

AlphaPad.propTypes = {
    onChange: PropTypes.func.isRequired,
    primaryColor: PropTypes.string.isRequired,
};

export default AlphaPad;

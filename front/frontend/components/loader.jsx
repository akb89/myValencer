import React from 'react';
import PropTypes from 'prop-types';

class Loader extends React.Component {
    render() {
        const pstyle = {
        };

        const sstyle = {
        };

        if (this.props.primaryColor) {
            pstyle.backgroundColor = this.props.primaryColor;
        }

        if (this.props.secondaryColor) {
            sstyle.backgroundColor = this.props.secondaryColor;
        }

        return (
          <div className="fv-loader">
            <div className="fv-square fv-color-black" style={sstyle} />
            <div className="fv-square fv-color-black" style={sstyle} />
            <div className="fv-square fv-color-black fv-loader-last" style={sstyle} />
            <div className="fv-square fv-color-brand fv-loader-clear" style={pstyle} />
            <div className="fv-square fv-color-brand" style={pstyle} />
            <div className="fv-square fv-color-brand fv-loader-last" style={pstyle} />
            <div className="fv-square fv-color-black fv-loader-clear" style={sstyle} />
            <div className="fv-square fv-color-black" style={sstyle} />
            <div className="fv-square fv-color-black fv-loader-last" style={sstyle} />
          </div>
        );
    }
}

Loader.propTypes = {
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
};

export default Loader;

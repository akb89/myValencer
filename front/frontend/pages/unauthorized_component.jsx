import React from 'react';
import AlphaPad from '../components/alphapad';
import PhonePad from '../components/phonepad';

class UnauthorizedComponent extends React.Component {
    /*    render() {
        return (
          <section className="hero is-fullheight">
            <div className="hero-body">
              <div className="container is-fluid">
                <div className="columns">
                  <div className="column is-half is-offset-one-quarter">
                    <div className="card">
                      <div className="card-content">
                        <div className="content has-text-centered">
                              You are not authorized to access this page.
                              <br />
                              Please contact your administrator to solve the problem.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
        }*/

    render() {
        return (<PhonePad
          onChange={(val) => { console.log(val); }}
          primaryColor="#E60019"
        />);
    }
}

export default UnauthorizedComponent;

import React from 'react';
import Loader from '../components/loader';

class InProgressComponent extends React.Component {
    render() {
        return (
          <section className="hero is-fullheight">
            <div className="hero-body">
              <div className="container is-fluid">
                <Loader />
              </div>
            </div>
          </section>
        );
    }
}

export default InProgressComponent;

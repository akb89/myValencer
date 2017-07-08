import { Route, Switch } from 'react-router-dom';
import React from 'react';
import InProgressComponent from './in_progress_component';
import UnauthorizedComponent from './unauthorized_component';

class App extends React.Component {
    render() {
        return (
          <Switch>
            <Route path="/machine/:mac" component={UnauthorizedComponent} />
            <Route path="/desk/:mac" component={InProgressComponent} />
            <Route path="/screen/:mac" component={InProgressComponent} />
          </Switch>
        );
    }
}

export default App;

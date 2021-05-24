import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Getaways from '../../containers/Getaways';
import Listing from '../../containers/Listing';
import './style.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route 
          path='/'
          exact
          render={(routerProps) => <Getaways {...routerProps}/>}  
        />
        <Route
          path='/:id'
          render={(routerProps) => <Listing {...routerProps}/>}
        />
      </Switch>
    </Router>
  );
}

import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import CraigsList from './craigslist';
import { App } from './App';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={CraigsList}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;

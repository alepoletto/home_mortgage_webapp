import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Home from './containers/home_page';
import DealList from './containers/deal_list';

export default(
  <Route path="/" component={App} >
      <IndexRoute  component={Home} />
      <Route path="deal" component={DealList} />
  </Route>
);

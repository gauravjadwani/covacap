import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './App';
import Table from './components/Table';
import Btable from './components/Btable';
import Dummy from './components/Dummy';

export default (
  <Route path="/" component={App}>
  <IndexRoute component={Btable}/>
      <Route path='/table' component={Table}/>
        <Route path='/Dummy' component={Dummy}/>

  </Route>
);

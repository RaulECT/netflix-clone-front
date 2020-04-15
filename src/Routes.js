import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Views/Home'

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={ Home } />
      </Switch>
    </>
  );
};

export default Routes;
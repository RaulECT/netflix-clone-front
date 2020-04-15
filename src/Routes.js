import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Views/Home';
import SignIn from './Views/SignIn';

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/signin' component={ SignIn } />
      </Switch>
    </>
  );
};

export default Routes;
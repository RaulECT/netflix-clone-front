import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Views/Home';
import SignIn from './Views/SignIn';
import Login from './Views/Login'

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/signin' component={ SignIn } />
        <Route exact path='/auth' component={ Login } />
      </Switch>
    </>
  );
};

export default Routes;
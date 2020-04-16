import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Views/Home';
import SignIn from './Views/SignIn';
import Login from './Views/Login';
import Catalogue from './Views/Catalogue';

function Routes() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/signin' component={ SignIn } />
        <Route exact path='/auth' component={ Login } />
        <Route path='/catalogue' component={ Catalogue } />
      </Switch>
    </>
  );
};

export default Routes;
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import VideoContent from '../VideoContent'

function CatalogueRoutes() {

  return (
    <> 
      <Switch>
        <Route exact path='/catalogue' component={VideoContent} />
      </Switch>
    </>
  );
}

export default CatalogueRoutes;
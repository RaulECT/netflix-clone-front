import React from 'react';
import { Route, Switch } from 'react-router-dom';

import VideoContent from '../VideoContent';
import Movies from '../Movies';
import Series from '../Series';

function CatalogueRoutes() {

  return (
    <> 
      <Switch>
        <Route exact path='/catalogue' component={VideoContent} />
        <Route exact path='/catalogue/movies' component={Movies} />
        <Route exact path='/catalogue/series' component={Series} />
      </Switch>
    </>
  );
}

export default CatalogueRoutes;
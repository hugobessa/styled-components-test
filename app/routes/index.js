import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch,
} from 'react-router-dom';

import ProfileCreatePageContainer from '../containers/ProfileCreatePageContainer';

const UdemyChallengeRoutes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={ProfileCreatePageContainer} />
    </Switch>
  </Router>
);

export default UdemyChallengeRoutes;

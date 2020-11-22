import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import LoginPage from './client/auth/LoginPage';
import Layout from './client/common/Layout';
import MoviesTVPage from './server/movies/MoviesTVPage';
import DetailsPage from './server/details/DetailsPage';
import ResultsPage from './client/results/ResultsPage';
import '../scss/site.scss';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MoviesTVPage}/>
      <Route path="/details" component={DetailsPage}/>
      <Route path="/results" component={ResultsPage}/>
      <Route path="/auth" component={LoginPage}/>
    </Route>
  </Router>,
  document.getElementById('app')
)

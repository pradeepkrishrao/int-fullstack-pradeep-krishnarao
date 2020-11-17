import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import LoginPage from './client/auth/LoginPage';

import Layout from './client/common/Layout';
import MoviesPage from './server/movies/MoviesPage';
import TVShowsPage from './server/tvshows/TVShowsPage';
import WatchlistPage from './server/watchlist/WatchlistPage';
import '../scss/site.scss';

render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MoviesPage}/>
      <Route path="/tvshows" component={TVShowsPage}/>
      <Route path="/watchlist" component={WatchlistPage}/>
      <Route path="/login" component={LoginPage}/>
    </Route>
</Router>,
  document.getElementById('app')
)

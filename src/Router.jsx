import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Game from './pages/Game';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Game />
        </Route>

        <Route path="/welcome">
          <Welcome />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from '../app/shared/Spinner';

const Realtime = lazy(() => import('./realtime/Realtime'));
const History = lazy(() => import('./history/History'));
const Login = lazy(() => import('./user-pages/Login'));

function AppRoutes() {
  if (localStorage.length <= 1) {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route exact path="/user-pages/login-1" component={Login} />
          <Redirect to="/user-pages/login-1" />
        </Switch>
      </Suspense>
    );
  } else {
    return (
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/realtime" component={Realtime} />
          <Route path="/history" component={History} />
          <Route path="/*" component={Realtime} />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;
import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { FilmsPage } from './pages/contentPages/FilmsPage';
import { CharactersPage } from './pages/contentPages/CharactersPage';
import { PlanetsPage } from './pages/contentPages/PlanetsPage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import styles from './App.module.css'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute';

export const App: React.FC = () => (
  <div className={styles.app}>
    <BrowserRouter>
      <div className={styles.appNavbar}>
        <NavigationBar />
      </div>

      <Switch>
        <Redirect from="/sw-react" to="/sw-react/films" exact />
        <PrivateRoute path="/sw-react/films/:id?">
          <FilmsPage />
        </PrivateRoute>
        <PrivateRoute path="/sw-react/characters/:id?">
          <CharactersPage />
        </PrivateRoute>
        <PrivateRoute path="/sw-react/planets/:id?">
          <PlanetsPage />
        </PrivateRoute>

        <Route component={LoginPage} path="/sw-react/login" exact />

        <Route component={NotFoundPage} path="*" />

        {/* FIXME: Navigation for child routes (edit screens) */}
        {/*     <Route path="/planets/:id?" render={({ match: { path } }) => (
            <Switch>
              <Route exact component={Planetspage} path={path} />
              <Route exact component={() => <div>Edit</div>} path={`${path}/edit`} />
            </Switch>
          )} /> */}

      </Switch>
    </BrowserRouter>
  </div>
)

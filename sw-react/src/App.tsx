import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { NavigationBar } from './components/NavigationBar';
import { FilmsPage } from './pages/contentPages/FilmsPage';
import { PeoplesPage } from './pages/contentPages/PeoplesPage';
import { PlanetsPage } from './pages/contentPages/PlanetsPage';
import { LoginPage } from './pages/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import styles from './App.module.css'

export const App: React.FC = () => (
  <div className={styles.app}>
    <BrowserRouter>
      <div className={styles.appNavbar}>
        <NavigationBar />
      </div>

      <Switch>
        <Route component={FilmsPage} path="/films/:id?" />
        <Route component={PeoplesPage} path="/peoples/:id?" />
        <Route component={PlanetsPage} path="/planets/:id?" />

        <Route component={LoginPage} path="/login" exact />
        <Redirect from="/" to="/films" exact />

        {/* FIXME: Navigation for child routes (edits) */}
        {/*     <Route path="/planets/:id?" render={({ match: { path } }) => (
            <Switch>
              <Route exact component={Planetspage} path={path} />
              <Route exact component={() => <div>Edit</div>} path={`${path}/edit`} />
            </Switch>
          )} /> */}

        {/* FIXME: Add uthorization 
               <Route exact path="/edit">
                  {loggedIn ? <Redirect to="/edit" /> : </login />}
               </Route>
           */}
        <Route component={() => <div>Test</div>} path="/test" exact />
        <Route component={NotFoundPage} path="*" />
      </Switch>
    </BrowserRouter>
  </div>
)

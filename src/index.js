import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import routes from './routes';

// Helper function that renders single route
const renderRoute = (route, props) => {
    window.scrollTo(0,0); // Reset scroll to top
    return (
      <route.component routeParams={props.match.params}/>
    );
  };
  
  // Helper function that create all routes
  const createRoutes = () => routes.map((route) => (
    <Route
      exact
      key={route.path}
      path={route.path}
      component={(props) => renderRoute(route, props)}>
    </Route>
  ));
  
  ReactDOM.render(
      <BrowserRouter>
        <div>
          {createRoutes()}
        </div>
      </BrowserRouter>,
    document.getElementById('root')
  );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

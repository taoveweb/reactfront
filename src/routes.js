//import React from 'react';
//import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import HomePage from './components/HomePage';
//import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
//import AboutPage from './components/AboutPage';
//import NotFoundPage from './components/NotFoundPage';

/*
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
*/


/*function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}
function loadRoute(cb) {
  return (module) => cb(null, module.default);
}*/


export default {
  component: App,
  childRoutes: [
    {
      path: '/',
      component:HomePage,
      /*getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./components/HomePage').default);
        }, 'HomePage'); // 產生 Home.chunk.js
      }*/
    },{
      path: '/about',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./components/AboutPage').default);
        }, 'AboutPage'); // 產生 Home.chunk.js
      }
    },
    {
      path: '*',
      getComponent(location, cb) {
        require.ensure([], (require) => {
          cb(null, require('./components/NotFoundPage').default);
        }, 'NotFoundPage'); // 產生 Home.chunk.js
      }
    }
  ]
};

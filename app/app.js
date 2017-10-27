/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';


import { ThemeProvider } from 'styled-components';
import applyGlobalStyles from './styles/index';
import theme from './styles/theme';

import Routes from './routes';

// the .htaccess file
/* eslint-disable */
import 'file-loader?name=[name].[ext]!./.htaccess'; // eslint-disable-line import/extensions
/* eslint-enable */


// Create redux store with history
const MOUNT_NODE = document.getElementById('app');

const render = () => {
  applyGlobalStyles();
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['containers/ProfileCreatePageContainer'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}

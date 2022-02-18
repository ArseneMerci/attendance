import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/store';
import { Provider } from 'react-redux';
import loadAuthStatus from './middlewares/loadAuthStatus';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
// import '@fortawesome/fontawesome-free/css/all.min.css';
library.add(fas)
library.add(fab);
library.add(far)

loadAuthStatus().then(() => {
  ReactDOM.render(<App />, document.querySelector("#root"));
});
reportWebVitals();

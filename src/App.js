import React from 'react';
import './App.css';
import Routes from "./routes/routes";
import { Router } from 'react-router-dom'
import { createBrowserHistory } from "history";
import store from './redux/store';
import { Provider } from 'react-redux';

const history = createBrowserHistory();

function App() {
  return (
     <Provider store={store}>
    <Router history={history}>
        <Routes />
    </Router>
      </Provider>
  );
}

export default App;
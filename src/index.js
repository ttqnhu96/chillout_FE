import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
//Setup redux
import store from './redux/configStore'
import { Router } from 'react-router-dom';
import { history } from './util/history';
import './i18n';

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <Suspense fallback="">
        <App />
      </Suspense>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

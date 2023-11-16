import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';


import 'src/assets/css/index.less'
import 'normalize.css'  //样式重置
import App from 'src/App';
import store from './store';
import { Provider } from 'react-redux';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </Suspense>
);
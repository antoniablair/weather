import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
 <Provider store={configureStore()}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
 </Provider>,
 document.getElementById('root')
);

registerServiceWorker();
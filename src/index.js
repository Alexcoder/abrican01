import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import store from './State/store';
import { Provider } from 'react-redux';

import { ContextProvider } from './State/context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
     <Router>
      <ContextProvider >
        <App />
      </ContextProvider>
    </Router>
  </Provider>
);


// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';

// import {legacy_createStore, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import reducers from './state/reducers';
// import {Provider} from 'react-redux'
// import {ContextProvider} from './state';

// const store = legacy_createStore(reducers, compose(applyMiddleware(thunk)))



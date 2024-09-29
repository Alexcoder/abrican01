import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ContextProvider } from './State/context/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ContextProvider >
        <App />
      </ContextProvider>
    </Router>
  </React.StrictMode>
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

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <Provider store={store}>
//       <BrowserRouter>
//        <ContextProvider>
//          <App />,
//        </ContextProvider>
//       </BrowserRouter>
//     </Provider>

// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

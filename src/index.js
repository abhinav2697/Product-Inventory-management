import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';


import { createStore, applyMiddleware, compose,combineReducers } from 'redux';
import ProductReducer from "./reducers/ProductReducer"
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const combine_reducers = combineReducers({productReducer: ProductReducer,userReducer: reducer}) 

const store = createStore(combine_reducers,composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
    
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

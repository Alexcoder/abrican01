import {legacy_createStore } from "redux";
import {thunk} from 'redux-thunk';
import { applyMiddleware } from "redux";
import reducers from "../reducers";


const store = legacy_createStore(reducers, applyMiddleware(thunk));
export default store;
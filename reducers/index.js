import { combineReducers } from 'redux';

import users from './users';
import data from './data';

import { routerReducer } from 'react-router-redux';


export default combineReducers({ users, data, routing: routerReducer });
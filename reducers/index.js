import { combineReducers } from 'redux';

import users from './users';
import images from './images';
import application from './application';

import { routerReducer } from 'react-router-redux';


export default combineReducers({ users, images, application, routing: routerReducer });
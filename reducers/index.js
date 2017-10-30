import { combineReducers } from 'redux';

import users from './users';
import images from './images';
import application from './application';
import { nav, auth } from './nav';

import { routerReducer } from 'react-router-redux';


export default combineReducers({ users, images, application, nav });
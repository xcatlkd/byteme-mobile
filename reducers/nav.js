import { NavigationActions } from 'react-navigation';
// import { combineReducers } from 'redux';

import { AppNavigator } from '../navigators/AppNavigator';


// define routing here #######################################3

const firstAction = AppNavigator.router.getActionForPathAndParams('Landing');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const secondAction = AppNavigator.router.getActionForPathAndParams('Login');
const initialNavState = AppNavigator.router.getStateForAction(secondAction, tempNavState);

export function nav( state = initialNavState, action ) {
	let nextState;
	switch(action.type) {
		case "LOGIN":
			nextState = AppNavigator.router.getStateForAction(
				NavigationActions.back(),
				state
			);
			break;
		case "LOGOUT":
			nextState = AppNavigator.router.getStateForAction(
				NavigationActions.navigate({ routeName: 'Landing' }),
				state,
			);
			break;
		default:
			nextState = AppNavigator.router.getStateForAction(action, state);
			break;
	}
	return nextState || state;
}


const initialAuthState = { isLoggedIn: false };

export function auth(state = initialAuthState, action) {
	switch(action.type) {
		case "LOGIN":
			return {
				...state,
				isLoggedIn: true,
			}
		case "LOGOUT":
			return {
				...state,
				isLoggedIn: false,
			}
		default:
			return state;
	}
}

// const AppReducer = combineReducers({
// 	nav,
// 	auth,
// });

// export default AppReducer;

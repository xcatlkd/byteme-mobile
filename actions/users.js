import API from '../util/api';

export function signup(user) {
	console.log("actions/users   signup();  user: ", user);
	return (dispatch) => {
		dispatch({
			type: "SIGNUP_PENDING",
			error: "Testing",
		})
	}
}
// These actions control only routing within the application.
// Validation and authentication is handled in the actions/users file.

export function photos() {
	return (dispatch) => {
		dispatch({
			type: "PHOTOS",
		})
	}
}

export function login() {
	return (dispatch) => {
		dispatch({
			type: "LOGIN"
		})
	}
}

export function signup() {
	return (dispatch) => {
		dispatch({
			type: "SIGNUP"
		})
	}
}

export function profile(user) {
	return (dispatch) => {
		dispatch({
			type: "PROFILE",
			currentUser: user,
		})
	}
}
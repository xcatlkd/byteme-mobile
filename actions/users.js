import API from '../util/api';

export function signup(user) {
	return (dispatch) => {
		dispatch({
			type: "AUTH_PENDING",
		})
		API.post("/user/signup", {
			args: {
				username: user.username,
				password: user.password,
			},
		})
		.then((res) => {
			if (res) {
				dispatch({
					type: "AUTH_SUCCESS",
					username: res.username,
					userId: res.id,
				})
			}
			else {
				console.error(res.error);
				dispatch({
					type: "AUTH_FAILURE",
					error: res.error,
				})
			}
		})
		.catch((error) => {
			console.error("action/users    API.post/user/signup   (error): ", error);
			dispatch({
				type: "AUTH_FAILURE",
				error: error,
			})
		})
	}
}

export function login(user) {
	return (dispatch) => {
		dispatch({
			type: "AUTH_PENDING",
		})
		API.post("/user/login", {
			args: {
				username: user.username,
				password: user.password,
			},
		})
		.then((res) => {
			if (res) {
				dispatch({
					type: "AUTH_SUCCESS",
					username: res.username,
					userId: res.id,
				})
			}
			else {
				console.error(res.error);
				dispatch({
					type: "AUTH_FAILURE",
					error: res.error,
				})
			}
		})
		.catch((error) => {
			console.error("action/users    API.post/user/signup   (error): ", error);
			dispatch({
				type: "AUTH_FAILURE",
				error: error,
			})
		})
	}
}
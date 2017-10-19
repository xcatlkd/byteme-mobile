import API from '../util/api';

export function signup(user) {
	console.log("actions/users   signup();  user: ", user);
	return (dispatch) => {
		dispatch({
			type: "SIGNUP_PENDING",
		})
		API.post("/user/signup", {
			args: {
				username: user.username,
				password: user.password,
			},
		})
		.then((res) => {
			if (res) {
				console.log("action/users    API.post/user/signup   (res): ", res);
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
import * as requester from '../helpers/requester';


function saveSession(userInfo) {
	sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
	sessionStorage.setItem('userId', userInfo._id);
	sessionStorage.setItem('username', userInfo.username);
}

function login(email, password, callback) {
		let userData = {
			email: email,
			password: password
		}
		requester.get('user', 'login', 'basic', userData)
			.then((response) => {
					saveSession(response);
					callback(true);
			});
}

function register(email, username, password, callback) {
	let userData = {
		email: email,
		username: username,
		password: password
	}
	requester.post('user', '', 'basic', userData)
		.then((response) => {
			saveSession(response);
			callback(true);
		});
}

function logout() {
	sessionStorage.clear();
}

export {login, register, logout};
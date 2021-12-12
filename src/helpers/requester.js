import $ from 'jquery';

const baseUrl = 'https://baas.kinvey.com/'
const appKey = 'kid_ryMurom5Y';
const appSecret = '827eebacb1c54bb0b5183649e6f20fe7';


function makeHeader(auth) {
	let header = {
		'Content-Type': 'application/json',
		'Authorization': ''
	}

	switch(auth) {
	case 'basic':
		header['Authorization'] = 'Basic ' + btoa(appKey + ':' + appSecret);
		break;
	case 'kinvey':
		header['Authorization'] = 'Kinvey ' + sessionStorage.getItem('authToken');
		break;
	default:
		break;
	}

}
function get(module, url, auth) {
	let hostUrl = baseUrl + module + '/' + appKey + '/' + url;
	let header = makeHeader(auth);

	return $.ajax({
		method: 'GET',
		url: hostUrl,
		header: header
	});

}

function post(module, url, auth, data) {
	let hostUrl = baseUrl + module + '/' + appKey + '/' + url;
	let header = makeHeader(auth);

	return $.ajax({
		method: 'POST',
		url: hostUrl,
		header: header,
		data: data
	});
}

export {get, post};
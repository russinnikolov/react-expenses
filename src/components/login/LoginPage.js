import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {login} from '../../models/user';


export default class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};

		this.onChangeEvent = this.onChangeEvent.bind(this);
		this.onSubmitEvent = this.onSubmitEvent.bind(this);
		this.response = this.response.bind(this);
	}

	onChangeEvent(e) {

	}

	onSubmitEvent(e) {
		console.log('here');
		e.preventDefault();
		login(this.state.email, this.state.password, this.response);
	}

	response(result) {
		if(result) {
			console.log('success');
		} else {
			console.log('error');
		}
	}

	render() {
		return (
			<div>
				<h1>Login</h1>
				<LoginForm
					email={this.state.email}
					password={this.state.password}
					onSubmit={this.onSubmitEvent}
					onChange={this.onChangeEvent}
				/>
			</div>
		)
	};
}
import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {login} from '../../models/user';


export default class LoginPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};

		this.onChangeEvent = this.onChangeEvent.bind(this);
		this.onSubmitEvent = this.onSubmitEvent.bind(this);
		this.response = this.response.bind(this);
	}

	onChangeEvent(e) {
		e.preventDefault();
		let newState = {};
		newState[e.target.name] = e.target.value;
		this.setState(newState);
	}

	onSubmitEvent(e) {
		e.preventDefault();
		login(this.state.username, this.state.password, this.response);
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
					username={this.state.username}
					password={this.state.password}
					onSubmit={this.onSubmitEvent}
					onChange={this.onChangeEvent}
				/>
			</div>
		)
	};
}
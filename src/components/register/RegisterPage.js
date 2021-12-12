import React, {Component} from 'react';
import RegisterForm from './RegisterForm';
import {register} from '../../models/user';

export default class RegisterPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			username: '',
			password: '',
			confirm: ''
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
		if(this.state.password !== this.state.confirm) {
			alert('The two passwords don\'t match');
		} else {
			register(this.state.email, this.state.username, this.state.password, this.response)
		}
	}

	response(result) {
		if(result) {
			console.log('success');
		} else {
			console.log('failed');
		}

	}

	render() {
		return (
			<div>
				<h1>Registration</h1>
				<RegisterForm
					email={this.state.email}
					username={this.state.username}
					password={this.state.password}
					confirm={this.state.confirm}
					onChange={this.onChangeEvent}
					onSubmit={this.onSubmitEvent}
				/>
			</div>
		);
	}

	// App.contextTypes = {
	// 	router: PropTypes.object
	// };
}

import React, {Component} from 'react';
import './Login.css';

export default class RegisterForm extends Component {
	render() {
		return(
			<form id="login-from" className="card" onSubmit={this.props.onSubmit}>
				<div className="form-group ">
					<input
						type="text"
						name="username"
						className="form-control"
						placeholder="Username"
						value={this.props.username}
						onChange={this.props.onChange}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						name="password"
						className="form-control"
						placeholder="Password"
						value={this.props.password}
						onChange={this.props.onChange}
					/>
				</div>
				<input type="submit" className="btn btn-primary submit-btn" value="Login" />
			</form>
		);
	}
}
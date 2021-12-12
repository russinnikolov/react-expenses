import React, {Component} from 'react';
import './Login.css';

export default class RegisterForm extends Component {
	render() {
		return(
			<form id="login-from" className="card" onSubmit={this.props.onSubmitEvent}>
				<div className="form-group ">
					<input
						type="email"
						name="email"
						className="form-control"
						placeholder="Email"
						onChange={this.props.onChange}

					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						name="password"
						className="form-control"
						placeholder="Password"
						onChange={this.props.onChange}
					/>
				</div>
				<input type="button" className="btn btn-primary submit-btn" value="Register" />
			</form>
		);
	}
}
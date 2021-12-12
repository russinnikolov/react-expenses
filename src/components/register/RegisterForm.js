import React, {Component} from 'react';
import './Registration.css';

export default class RegisterForm extends Component {
	render() {
		return(
			<form id="registration-from" className="card" onSubmit={this.props.onSubmit}>
				<div className="form-group ">
					<input
						type="email"
						name="email"
						className="form-control"
						placeholder="Email"
						value={this.props.email}
						onChange={this.props.onChange}
					/>
				</div>
				<div className="form-group ">
					<input
						type="text"
						name="username"
						className="form-control"
						placeholder="Choose Username"
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
				<div className="form-group">
					<input
						type="password"
						name="confirm"
						className="form-control"
						placeholder="Confirm Password"
						value={this.props.confirm}
						onChange={this.props.onChange}
					/>
				</div>
				<input
					type="submit"
					className="btn btn-primary submit-btn"
					value="Register"
				/>
			</form>
		);
	}
}
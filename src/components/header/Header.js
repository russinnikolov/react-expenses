import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';


export default class Header extends Component{
	render() {
		return (<div>
			{this.props.children}
		</div>);
	}
}
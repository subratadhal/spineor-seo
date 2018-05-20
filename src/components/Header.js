import React from "react";
import { Link } from "react-router-dom";


export default class Header extends React.Component {
	constructor(props) {
    super(props);
	}
	componentDidMount( ) {
    
  }
	render() { 
    return (
	    <div>
	        <Link to="/">Home</Link>
	        <Link to="/about">About</Link>
	        <Link to="/contact">Contact</Link>
	        <Link to="/secret">Secret</Link> 
	    </div>
    );
	}
}


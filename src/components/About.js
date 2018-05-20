import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";

export default class About extends React.Component {

  render() { 
    return (
    	<div>
    		<Helmet>
            <title>About</title>
            <meta name="ROBOTS" CONTENT="NOINDEX, NOFOLLOW" />
            <meta name="description" content="About" />
        </Helmet>
		    <h2>This is the about page ss</h2>
		    <Link to="/about/01">details</Link>
		    det

		  </div>
		);
  }
}

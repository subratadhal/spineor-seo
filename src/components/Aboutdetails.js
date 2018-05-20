import React from "react";
import Helmet from "react-helmet";

export default class AboutDetails extends React.Component {

  render() { 
    return (
    	<div>
    		<Helmet>
            <title>AboutDetails</title>
            <meta name="ROBOTS" CONTENT="NOINDEX, NOFOLLOW" />
            <meta name="description" content="About AboutDetails" />
        </Helmet>
		    <h2> About Details </h2>
		    
		  </div>
		);
  }
}

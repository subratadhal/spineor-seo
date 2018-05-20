import React from 'react';
import { Link } from "react-router-dom";
import Helmet from "react-helmet";


export default class DevopsAndTesting extends React.Component {
	

  render() {

  
    return (
    	<div>
    		<Helmet>
            <title>About</title>
            <meta name="ROBOTS" CONTENT="NOINDEX, NOFOLLOW" />
            <meta name="description" content="About" />
        </Helmet>

			<section>
				<div className="container">
					<div className="row">
						<div className="">
							<h1>DevopsAndTesting</h1>
						</div>
						<div className="col-sm-12">
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							DevopsAndTesting
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
							<br/>
						</div>
					</div>
				</div>
			</section>
			</div>	
    );
  }
}
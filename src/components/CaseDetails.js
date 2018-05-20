import React from 'react';
import Helmet from "react-helmet";
import data from './casestudiesdata';

export default class CaseDetails extends React.Component {
	constructor(props) {
    super(props);
	}
	componentDidMount() {
		console.log(this.props.match.params.title);
	}

	render() {
  
		return (
			<div>
    		<Helmet>
            <title>About</title>
            <meta name="ROBOTS" CONTENT="NOINDEX, NOFOLLOW" />
            <meta name="description" content="About" />
        </Helmet>

			<section>
				
				<section className="banner inner-banner banner-work"> 
					<img src="../../images/top_img_work2.png"/> 
					<div className="about-head bnr-hd container">
						<h1>Bowling Stones</h1>
					</div>
				</section>

				<section>
					<div className="container">
						<div className="back-list">
							<ul className="">
								<li>Home</li>
								<li>Case Studies</li>
								<li>Bowling Stones</li>
							</ul>
						</div>
						<div className="Bowling-stone">
							<div className="row">
								<div className="col-sm-3">
									<div className="logo">
										<img src="../../images/project_Logo.png"/>
									</div>
								</div>
								<div className="col-sm-6">
										<div className="the-objective">
											<span>THE OBJECTIVE</span>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
											<br/>
											<br/>
											Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
										</div>
									</div>
									<div className="col-sm-3">
										<div className="Projec-module">
											<span>PROJECT MODULES</span>
											<ul className="Projec-module-list">
												<li>Research + Discovery</li>
												<li>User Personas</li>
												<li>User Journeys</li>
												<li>User Experience Design</li>
												<li>Web Development</li>
												<li>Enterprise CDN Deployment</li>
											</ul>
										</div>
									</div>
							</div>
							<div className="lorem-ipsum">
								<div className="row">
									<div className="col-sm-5">
										<div className="comp-logo">
											<img src="../../images/computer-logo_03.jpg"/>
										</div>
									</div>
									<div className="col-sm-7">
										<div className="ipsum-content ">
											<span>THE OBJECTIVE</span>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
											<div className="ipsum-team">
												<h4>Team</h4>
												<span><img src="../../images/team1.jpg" /></span>
												<span><img src="../../images/team2.jpg" /></span>
												<span><img src="../../images/team3.jpg" /></span>
											</div>
											<div className="ipsum-technologies">
												<h4>Technologies</h4>
												<span><a href="">Angular JS</a></span>
												<span><a href="">HTML</a></span>
												<span><a href="">CSS</a></span>
												<span><a href="">CodeIgniter</a></span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="container">
						<div className="Bowling-stone-form">
								<div className="Bowling-stone-heading">
									<h1>So, shall we do some<br/>work together?</h1>
								</div>
								<div className="col-sm-12">
									<form action="">
										<div className="form-group col-sm-4">
				      						
				      						<input type="text" className="form-control" id="name" placeholder="Name" name="name"/>
				    					</div>
				    					<div className="form-group col-sm-4">
				      						
				      						<input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
				    					</div>
				    					<div className="form-group col-sm-4">
				     		 				
				      						<input type="text" className="form-control" id="phone" placeholder="Phone" name="phone"/>
				    					</div>
				    					<div className="form-group col-sm-4">
				     		 				
				      						<input type="text" className="form-control" id="phone" placeholder="Budget" name="Budget"/>
				    					</div>
				    					<div className="form-group col-sm-4">
				     		 				
				      						<input type="text" className="form-control" id="phone" placeholder="Country" name="Country"/>
				    					</div>
				    					<div className="form-group col-sm-4">
				     		 				
				      						<input type="text" className="form-control" id="phone" placeholder="Skype/Whatsapp" name="Skype/Whatsapp"/>
				    					</div>
				    					<div className="form-group">
				      						
				      						<textarea className="form-control" rows="5" id="comment" placeholder="Project Description"></textarea>
				    					</div>
				    					<button type="submit" className="btn submit-btn">SUBMIT A REQUEST</button>
				    				</form>
								</div>
						</div>
					</div>
				</section>


			</section>

			</div>	
		);
	}
}


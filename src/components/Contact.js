import React from 'react';
import Helmet from "react-helmet";

export default class Contact extends React.Component {
	constructor(props) {
    super(props);
	}

	render() {
  
		return (
			<div>
    		<Helmet>
            <title>About</title>
            <meta name="ROBOTS" CONTENT="NOINDEX, NOFOLLOW" />
            <meta name="description" content="About" />
        </Helmet>	

	<section className="banner inner-banner banner-contact"> 
		<img src="../../images/top_img_contact.png"/> 
		<div className="about-head bnr-hd container">
			<h1>Contact</h1>
		</div>
	</section>

	<section className="contact-infopage">
		<div className="container">
			<div className="back-list">
				<ul className="">
					<li>Home</li>
					<li>Contact</li>
				</ul>	
			</div>
			<div className="get-in-section-contact">
					<div className="get-in-touch">
						<h2 className="heading">GET IN TOUCH</h2>
					</div>
					<div className="col-sm-6">
						<div className="contact-infos">
							<span>We want to hear from you!</span>
						</div>
						
						<form action="">
							<div className="form-group">
	      						
	      						<input type="text" className="form-control" id="name" placeholder="Name" name="name"/>
	    					</div>
	    					<div className="form-group">
	      						
	      						<input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
	    					</div>
	    					<div className="form-group">
	     		 				
	      						<input type="text" className="form-control" id="phone" placeholder="Phone" name="phone"/>
	    					</div>
	    					<div className="form-group">
	      						
	      						<textarea className="form-control" rows="5" id="comment" placeholder="message"></textarea>
	    					</div>
	    					<button type="submit" className="btn submit-btn">SEnd message</button>
	    				</form>
					</div>
					<div className="col-sm-6">
						<div className="contact-info">
							<span>Contact Information</span>
							<div className="contact-info-list">
								<ul>
									<li>
										<div className="location">
										<span id="in-img"><img src="../../images/Contact_big_icon1_blue.png"/></span>
										<p><span>Location:</span>
										E-261, IT TOWER, AirportRoad, Mohali (PB)</p>
									</div>
									</li>
									<li>
										<div className="location">
										<span id="in-img"><img src="../../images/Contact_big_icon3_blue.png"/></span>
										<p><span>Phone:</span>
										0172-5058146 ,       91-99150-21146</p>
									</div>
									</li>
									<li>
										<div className="location">
										<span id="in-img"><img src="../../images/Contact_big_icon2_blue.png"/></span>
										<p><span>Email:</span>
										info@spineor.com</p>
									</div>
									</li>
									<li>
										<div className="location">
										<span id="in-img"><img src="../../images/Contact_big_icon4_blue.png"/></span>
										<p><span>Skype:</span>
										Spineor-web-Services</p>
									</div>
									</li>
									
								</ul>
							</div>
						</div>
					</div>
					
			</div>
		</div>
	</section>

			</div>	
		);
	}
}


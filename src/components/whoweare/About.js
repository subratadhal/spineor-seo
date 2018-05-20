import React from 'react';
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

			<section>

				<section className="banner inner-banner">
					<img src="../../images/About_top_img.jpg"/> 
					<div className="about-head bnr-hd container">
						<h1>About Us</h1>
					</div>
				</section>

				<section>
					<div className="container">
						<div className="back-list">
							<ul className="">
								<li>Home</li>
								<li>Who we are</li>
								<li>About us</li>
							</ul>
						</div>
						<div className="our-mission">
							<h4>OUR MISSION</h4>
							<p>We are a new breed of IT Professional Services and Web Solutions Partner. Established in 2013 as a pure IT company, Spineor has grown into a successful company of over 60 employees that is focused on helping companies solve their most challenging issues. Information Technology is our single focus and our IT experts, Team Leads and Managers are constantly expanding their knowledge and experience to better understand the diverse skills and solutions that are in demand by our customers. With so many different developments, content and data management platforms in use today, our customers can be comfortable knowing that SPINEOR professionals are constantly exposed to, and learning about what’s new in the technology marketplace. So, when you think of IT solutions, think SPINEOR.</p>
						</div>
						<div className="row text-center">
							<div className="why-choose-spineor">
								<h2 className="heading">why choose spineor</h2>
							</div>
							<div className="col-sm-3">
								<div className="detailed-web-sol">
									<span><img src="../../images/heart.jpg"/></span>
									<h4>Love makes the world go round</h4>
									<p>We love what we do and we love our clients. They mean the world to us.</p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="detailed-web-sol">
									<span><img src="../../images/sun.jpg"/></span>
									<h4>Energy matters</h4>
									<p>We’re still bright eyed even on redeyes. We’ve got the drive to tackle every kind of project platform no matter how challenging.</p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="detailed-web-sol">
									<span><img src="../../images/star-computer.jpg"/></span>
									<h4>Quality first</h4>
									<p>At Spineor, ensuring the quality of the work is just as important is the delivery of our work.</p>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="detailed-web-sol">
									<span><img src="../../images/arrow.jpg"/></span>
									<h4>Zeal to deal with challenges</h4>
									<p>We are open to new challenges, new technology stack and new trends of IT.</p>
								</div>
							</div>
						</div>
						<div className="row your-Service ">
							<div className="World-Best-at">
								<h2 className="heading">World’s Best at your Service</h2>
							</div>
							<div className="col-sm-3">
								<div className="item">
									<div className="sec-1">
										<img className="image" src="../../images/About-Us_New_06.jpg"/>
										<div className="item-heading text-left">
											<h4>Prince Kumar</h4>
											<p>CEO/DIRECTOR</p>
										</div>
										<div className="opac">
											<div className="photo-icons">
												<ul className="icons-lists">
													<li><a href=""><i className="fa fa-facebook-square"></i></a></li>
													<li><a href=""><i className="fa fa-linkedin-square"></i></a></li>
													<li><a href=""><i className="fa fa-google-plus-official"></i></a></li>
													<li><a href=""><i className="fa fa-skype"></i></a></li>
												</ul>
											</div>
										</div>
									</div>
			   					</div>
							</div>
							<div className="col-sm-3">
								<div className="item">
									<div className="sec-1">
										<img className="image" src="../../images/About-Us_New_08.jpg"/>
										<div className="item-heading text-left">
											<h4>Rajnikant Sharma</h4>
											<p>Chief Technical Officer</p>
										</div>
										<div className="opac">
											<div className="photo-icons">
												<ul className="icons-lists">
													<li><a href=""><i className="fa fa-facebook-square"></i></a></li>
													<li><a href=""><i className="fa fa-linkedin-square"></i></a></li>
													<li><a href=""><i className="fa fa-google-plus-official"></i></a></li>
													<li><a href=""><i className="fa fa-skype"></i></a></li>
												</ul>
											</div>
										</div>
									</div>
			   					</div>
							</div>
							<div className="col-sm-3">
								<div className="item">
									<div className="sec-1">
										<img className="image" src="../../images/About-Us_New_11.jpg"/>
										<div className="item-heading text-left">
											<h4>Gurujot Singh</h4>
											<p>Technology Head</p>
										</div>
										<div className="opac">
											<div className="photo-icons">
												<ul className="icons-lists">
													<li><a href=""><i className="fa fa-facebook-square"></i></a></li>
													<li><a href=""><i className="fa fa-linkedin-square"></i></a></li>
													<li><a href=""><i className="fa fa-google-plus-official"></i></a></li>
													<li><a href=""><i className="fa fa-skype"></i></a></li>
												</ul>
											</div>
										</div>
									</div>
			   					</div>
							</div>
							<div className="col-sm-3">
								<div className="item">
									<div className="sec-1">
										<img className="image" src="../../images/About-Us_New_03.jpg"/>
										<div className="item-heading text-left">
											<h4>Satnam Singh</h4>
											<p>Business Head</p>
										</div>
										<div className="opac">
											<div className="photo-icons">
												<ul className="icons-lists">
													<li><a href=""><i className="fa fa-facebook-square"></i></a></li>
													<li><a href=""><i className="fa fa-linkedin-square"></i></a></li>
													<li><a href=""><i className="fa fa-google-plus-official"></i></a></li>
													<li><a href=""><i className="fa fa-skype"></i></a></li>

												</ul>
											</div>
										</div>
									</div>
			   					</div>
							</div>
						</div>
					</div>
				</section>

				<section className="creating-section">
					<div className="container">
						<div className="row">
							<div className="col-sm-7 agile-wrapper">
								<div className="agile-development-image">
									 <img className="agile-image" src="../../images/smile1.jpg"/>
								</div>
							</div>
							<div className="col-sm-5 we-use-wrapper">
								<div className="we-use-agile-method">
									<span>CREATING BEAUTIFUL PRODUCTS IS EASY</span>
									<h6>WHEN YOU CARE</h6>
								</div>
								<div className="increasing-prosperity-in-our-l">
									<p>Our development team works for qualitative product build that helps our clients better utilize their product and our QA team helps them measure satisfaction and usage, as well as discover ways to improve the user experience. We care for your product and your audience. With consistency of thought, of purpose, and of action over a long period of time, we will get you sustainable audience and product.</p>
								</div>
							</div>
						</div>
						<div className="row second-row">
							<div className="col-sm-5 we-use-wrapper">
								<div className="we-use-agile-method">
									<span>The only competition we care about is</span>
									<h6>ourselves</h6>
								</div>
								<div className="increasing-prosperity-in-our-l">
									<p>" The best helping hand is at the end of your arm"- says the first rule ofSelf-improvement!We follow the science famous rule "SURVIVAL OF THE FITTEST" Technology demands the updated , the fittest and the sharpest. If you are fit enough to match the trends in technologies... If you are addicted to constant and never-ending self improvement...You are just an email away from a door that opens the way to many opportunities. Reach us at info@spineor.com/hr@spineor.com to learn more about job profiles we have.</p>
								</div>
							</div>
							<div className="col-sm-7 agile-wrapper">
								<div className="agile-development-image">
									 <img className="agile-image" src="../../images/smile2.jpg"/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="container">
						<div className="row">
							<div className="Domain-agnostic">
								<h2 className="heading">We're Domain-agnostic</h2>
							</div>
							<div className="col-sm-3">
								<div className="auto-img">
									<img src="../../images/a_ICON.PNG"/>
									<h4>AUTOMOBILE</h4>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="auto-img">
									<img src="../../images/Ecommerce.png"/>
									<h4>ECOMMERCE</h4>
								</div>
							</div>
							<div className="col-sm-3">

								<div className="auto-img">
									<img src="../../images/COnsumer_icon.png"/>
									<h4>CONSUMER<br/>TECH</h4>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="auto-img">
									<img src="../../images/Real_estate.png"/>
									<h4>REAL<br/>ESTATE</h4>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="auto-img">
									<img src="../../images/saas.png"/>
									<h4>SAAS</h4>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="auto-img">
									<img src="../../images/Ecommerce.png"/>
									<h4>ENTERPRISE</h4>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="auto-img">
									<img src="../../images/fashion.png"/>
									<h4>FASHION</h4>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="auto-img">
									<img src="../../images/Healthcare.png"/>
									<h4>HEALTHCARE</h4>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>

			</div>
    );
  }
}
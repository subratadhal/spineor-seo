import React from 'react';
import { Link } from "react-router-dom";
import Helmet from "react-helmet";


export default class Careers extends React.Component {
	

  render() {

  
    return (
    	<div>
    		<Helmet>
            <title>About</title>
            <meta name="ROBOTS" CONTENT="NOINDEX, NOFOLLOW" />
            <meta name="description" content="About" />
        </Helmet>
			<section>
				<section className="banner inner-banner banner-our-process">
					<img src="../../images/top_img_career.png" />  
					<div className="about-head bnr-hd container">
						<h1>Careers</h1>
					</div>
				</section>

			<section>
				<div className="container">
					<div className="back-list">
							<ul className="">
								<li>Home</li>
								<li>Careers</li>
							</ul>
						</div>
					<div className="row">
						<div className="READY-TO-JOIN">
							<h2 className="heading">smile! satisfaction! smart solutions</h2>
							<p>A frenzy of new ideas, a stack of exciting release, surrounded by colleagues who are driven by passion and not deadlines, and an infectious vibe that pushes us to work at a breakneck speed day-in- in-day- out to deliver that next aha! moment to our customers.
							<br/>
							<br/>
							Welcome to a regular day at SPINEOR!</p>
						</div>
					</div>
				</div>
			</section>


			<section className="career-join">
				<div className="container">
					<div className="row text-center">
							<div className="why-choose-spineor">
								<h2 className="heading">Benefits, we think you’ll like them</h2>
								<p>Luxuries of a Start-Up begin after 3 months of working with us.</p>
							</div>
							<div className="col-sm-4">
								<div className="detailed-web-sol">
									<span><img src="../../images/fun_icon.png" /></span>
									<h4>Fun - filled retreats</h4>
									<p>Have fun with your co-workers Eating, Celebrating and sharing ahppy moments</p>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="detailed-web-sol">
									<span><img src="../../images/mentorship_icon.png" /></span>
									<h4>Mentorship</h4>
									<p>You’ll receive valuable training from the experienced mentors for the challenge you face at work</p>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="detailed-web-sol">
									<span><img src="../../images/remote_icon.png" /></span>
									<h4>Remote Work</h4>
									<p>Get things done - from home or an office. We understand the emergencies to stay at home on time.</p>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="detailed-web-sol">
									<span><img src="../../images/perks_icon.png" /></span>
									<h4>Allowances & Perks</h4>
									<p>Every extra effort you make, you are definitely rewards with allowance added to the salary.</p>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="detailed-web-sol">
									<span><img src="../../images/rocket_icon.png" /></span>
									<h4>A chance to skyrocket your career</h4>
									<p>In time you can become a team leader, come up with excellent results and take away the next level of designation.</p>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="detailed-web-sol">
									<span><img src="../../images/relocation_icon.png" /></span>
									<h4>Relocation Assistance</h4>
									<p>Want to explore Spineor from another corner of India, come and join us. We will take care of your relocation and accomodation..</p>
								</div>
							</div>
						</div>
				</div>
			</section>

			<section>
			 <div className="training-section text-center">
			    	<div className="container">
			    		<div className="world-class">
			    			<h2 className="heading">hot trendy technologies</h2>
			    		</div>
						<div className="row">
					    	<div className="col-sm-6 col-md-3 training-box"> 
					    		<span>
					    			<img src="../../images/latest.png" />
					    			<h5>Latest Technologies</h5>
					    			<p className="hover-contact">You’ll learn what it takes to become a team leader, how to make good decisions on the spot, inspire others and lead by example.</p>
					    		</span>
					    	</div>
					    	<div className="col-sm-6 col-md-3 training-box"> 
					    		<span>
					    			<img src="../../images/live.png" />
					    			<h5>Live Project</h5>
					    			<p className="hover-contact">You’ll learn what it takes to become a team leader, how to make good decisions on the spot, inspire others and lead by example.</p>
					    		</span>
					    	</div>
					    	<div className="col-sm-6 col-md-3 training-box"> 
					    		<span>
					    			<img src="../../images/leader.png" />
					    			<h5>Leadership</h5>
					    			<p className="hover-contact">You’ll learn what it takes to become a team leader, how to make good decisions on the spot, inspire others and lead by example.</p>
					    		</span>
					    	</div>
					    	<div className="col-sm-6 col-md-3 training-box"> 
					    		<span>
					    			<img src="../../images/teamwork.png" />
					    			<h5>Teamwork</h5>
					    			<p className="hover-contact">You’ll learn what it takes to become a team leader, how to make good decisions on the spot, inspire others and lead by example.</p>
					    		</span>
					    	</div>
					    </div>
					</div>
			    </div>

				<div className="openings-section">
					<div className="container">
						<div className="open-pos">
							<h2 className="heading">open positions</h2>
						</div>
						<div className="row">
							<div className="col-sm-8">
								<div className="react-dev">
									<ul className="react-dev-list">
										<li>
											<h2>React Developer</h2>
											<span>
												<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo">
													<span><img src="../../images/add_icon.png" /></span>
												</button>
											</span>
											<p>Ongoing</p>
										</li>
										
										<div id="demo" className="collapse">
											<div className="row">
												<div className="col-sm-12">
													<div className="apply-if-you">
														<h4>Apply if you have:</h4>
														<ul>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>awareness of state management patterns and solutions (e.g. Redux / Mobx),</li>
															<li><span></span>practice is using ES2015+,</li>
															<li><span></span>HTML5 APIs knowledge,</li>
															<li><span></span>CSS3 knowledge,</li>
															<li><span></span>experience with Responsive Web Design,</li>
															<li><span></span>real world git experience,</li>
															<li><span></span>a good command of written and spoken English(CEFR B2+);Polish not required</li>
															<li><span></span>strong communication skills.</li>
														</ul>
													</div>
													<div className="we-will-be">
														<h4>We will be glad to see that you also have:</h4>
														<ul>
															<li><span></span>React Native knowledge,</li>
															<li><span></span>knowledge of testing javascript code(Enzyme,Jest,Karma,Mocha)</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<li>
											<h2>Java/Scala Developer</h2>
											<span>
												<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo1">
													<span><img src="../../images/add_icon.png" /></span>
												</button>
											</span>
											<p>Ongoing</p>
										</li>
										
										<div id="demo1" className="collapse">
											<div className="row">
												<div className="col-sm-12">
													<div className="apply-if-you">
														<h4>Apply if you have:</h4>
														<ul>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>awareness of state management patterns and 		solutions (e.g. Redux / Mobx),
															</li>
															<li><span></span>practice is using ES2015+,
															</li>
															<li><span></span>HTML5 APIs knowledge,
															</li>
															<li><span></span>CSS3 knowledge,
															</li>
															<li><span></span>experience with Responsive Web Design,
															</li>
															<li><span></span>real world git experience,
															</li>
															<li><span></span>a good command of written and spoken English(CEFR B2+);Polish not required
															</li>
															<li><span></span>strong communication skills.
															</li>
														</ul>
													</div>
													<div className="we-will-be">
														<h4>We will be glad to see that you also have:</h4>
														<ul>
															<li><span></span>React Native knowledge,</li>
															<li><span></span>knowledge of testing javascript code(Enzyme,Jest,Karma,Mocha)</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<li>
											<h2>Laravel Expert</h2>
											<span>
												<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo2">
													<span><img src="../../images/add_icon.png" /></span>
												</button>
											</span>
											<p>Ongoing</p>
										</li>
										
										<div id="demo2" className="collapse">
											<div className="row">
												<div className="col-sm-12">
													<div className="apply-if-you">
														<h4>Apply if you have:</h4>
														<ul>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>awareness of state management patterns and 		solutions (e.g. Redux / Mobx),</li>
															<li><span></span>practice is using ES2015+,</li>
															<li><span></span>HTML5 APIs knowledge,</li>
															<li><span></span>CSS3 knowledge,</li>
															<li><span></span>experience with Responsive Web Design,</li>
															<li><span></span>real world git experience,</li>
															<li><span></span>a good command of written and spoken English(CEFR B2+);Polish not required</li>
															<li><span></span>strong communication skills.</li>
														</ul>
													</div>
													<div className="we-will-be">
														<h4>We will be glad to see that you also have:</h4>
														<ul>
															<li><span></span>React Native knowledge,</li>
															<li><span></span>knowledge of testing javascript code(Enzyme,Jest,Karma,Mocha)</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<li>
											<h2>DevOps Engineer</h2>
											<span>
												<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo3">
													<span><img src="../../images/add_icon.png" /></span>
												</button>
											</span>
											<p>Ongoing</p>
										</li>
										
										<div id="demo3" className="collapse">
											<div className="row">
												<div className="col-sm-12">
													<div className="apply-if-you">
														<h4>Apply if you have:</h4>
														<ul>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>awareness of state management patterns and 		solutions (e.g. Redux / Mobx),
															</li>
															<li><span></span>practice is using ES2015+,</li>
															<li><span></span>HTML5 APIs knowledge,</li>
															<li><span></span>CSS3 knowledge,</li>
															<li><span></span>experience with Responsive Web Design,</li>
															<li><span></span>real world git experience,</li>
															<li><span></span>a good command of written and spoken English(CEFR B2+);Polish not required 
															</li>
															<li><span></span>strong communication skills.</li>
														</ul>
													</div>
													<div className="we-will-be">
														<h4>We will be glad to see that you also have:</h4>
														<ul>
															<li><span></span>React Native knowledge,</li>
															<li><span></span>knowledge of testing javascript code(Enzyme,Jest,Karma,Mocha)</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
															<li><span></span>strong knowledge of React</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
										<li>
											<h2>Data Science Consultant</h2>
											<span>
												<button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo4">
													<span><img src="../../images/add_icon.png" /></span>
												</button>
											</span>
											<p>Ongoing</p>
										</li>
										
											<div id="demo4" className="collapse">
												<div className="row">
													<div className="col-sm-12">
														<div className="apply-if-you">
															<h4>Apply if you have:</h4>
															<ul>
																<li><span></span>strong knowledge of React</li>
																<li><span></span>awareness of state management patterns and 		solutions (e.g. Redux / Mobx),</li>
																<li><span></span>practice is using ES2015+,</li>
																<li><span></span>HTML5 APIs knowledge,</li>
																<li><span></span>CSS3 knowledge,</li>
																<li><span></span>experience with Responsive Web Design,</li>
																<li><span></span>real world git experience,</li>
																<li><span></span>a good command of written and spoken English(CEFR B2+);Polish not required</li>
																<li><span></span>strong communication skills.</li>
															</ul>
														</div>
														<div className="we-will-be">
															<h4>We will be glad to see that you also have:</h4>
															<ul>
																<li><span></span>React Native knowledge,</li>
																<li><span></span>knowledge of testing javascript code(Enzyme,Jest,Karma,Mocha)</li>
																<li><span></span>strong knowledge of React</li>
																<li><span></span>strong knowledge of React</li>
																<li><span></span>strong knowledge of React</li>
																<li><span></span>strong knowledge of React</li>
																<li><span></span>strong knowledge of React</li>
																<li><span></span>strong knowledge of React</li>
															</ul>
														</div>
													</div>
												</div>
											</div>
									</ul>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="apply-now">
									<div className="we-want">
										<span>Apply Now</span>
									</div>
									<div className="opening-form">
										<form action="/action_page.php">
											<div className="form-group">
					      						
					      						<input type="text" className="form-control" id="name" placeholder="Name" name="name" />
					    					</div>
					    					<div className="form-group">
					      						<input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
					    					</div>
					    					<div className="form-group">
					     		 				<input type="text" className="form-control" id="phone" placeholder="Phone" name="phone" />
					    					</div>
					    					<div className="form-group">
					     		 				<input type="text" className="form-control" id="skype" placeholder="Skype" name="skype" />
					    					</div>
					    					
					    					<button type="submit" className="btn submit-btn">SUBMIT</button>
					    				</form>
				    				</div>
								</div>
							</div>
						</div>	
					</div>
				</div>
			</section>


			<section>
				<div className="container">
					<div className="our-gallery">
						<div className="ready-img">
							<img src="../../images/home1.jpg" />
						</div>
						<div className="ready-img">
							<img src="../../images/home2.jpg" />
						</div>
						<div className="ready-img">
							<img src="../../images/home3.jpg" />
						</div>
						<div className="ready-img">
							<img src="../../images/home4.jpg" />
						</div>
					</div>
					
				</div>
			</section>
			</section>

			</div>
    );
  }
}
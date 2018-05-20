import React from 'react';
import { Link } from "react-router-dom";
import Helmet from "react-helmet";


export default class OurProcess extends React.Component {
	

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
					<img src="../../images/top_img.png" />
					<div className="about-head bnr-hd container">
						<h1>OUR PROCESS</h1>
					</div>
				</section>

				<section>
					<div className="container">
						<div className="back-list">
							<ul className="">
								<li>Home</li>
								<li>Who we are</li>
								<li>Our Process</li>
							</ul>
						</div>
						<div className="our-process-content">
							<div className="row">
								<div className="col-sm-5">
									<div className="Project-planning">
										<span><img src="../../images/planning_icon.png" /></span>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="Project-planning-content">
										<span>Project planning</span>
										<p>The idea for the project is explored and elaborated; decisions are made concerning the time and cost budgets. Project proposal including business plans and grant applications is created.</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-7">
									<div className="solution-architecture-content">
										<span>solution architecture</span>
										<p>The idea for the project is explored and elaborated; decisions are made concerning the time and cost budgets. Project proposal including business plans and grant applications is created.</p>
									</div>
								</div>
								<div className="col-sm-5">
									<div className="solution-architecture-img">
										<span><img src="../../images/solution.png" /></span>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-5">
									<div className="UI-Design-img">
										<span><img src="../../images/design.png" /></span>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="UI-Design-content">
										<span>UI Design</span>
										<p>Depending on the subject of the project, the products of the design phase can include dioramas, sketches, flow charts, site trees, HTML screen designs, prototypes, photo impressions and UML schemas. The project supervisors use these designs to choose the definitive design that will be produced in the project. This is followed by the development phase.</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-7">
									<div className="App-Web-dev-content">
										<span>App/Web-dev &QA</span>
										<p>The project takes shape during the implementation phase. This phase involves the construction of the actual project result. Programmers are occupied with encoding, designers are involved in developing graphics and testers in chasing the bugs.</p>
									</div>
								</div>
								<div className="col-sm-5">
									<div className="App-Web-img">
										<span><img src="../../images/app.png" /></span>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-5">
									<div className="Devops-Deployment-img">
										<span><img src="../../images/devops.png" /></span>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="Devops-Deployment-content">
										<span>Devops & Deployment</span>
										<p>Depending on the subject of the project, the products of the design phase can include dioramas, sketches, flow charts, site trees, HTML screen designs, prototypes, photo impressions and UML schemas. The project supervisors use these designs to choose the definitive design that will be produced in the project. This is followed by the development phase.</p>
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-sm-7">
									<div className="Support-Maintenance-content">
										<span>Support & Maintenance</span>
										<p>The project takes shape during the implementation phase. This phase involves the construction of the actual project result. Programmers are occupied with encoding, designers are involved in developing graphics and testers in chasing the bugs.</p>
									</div>
								</div>
								<div className="col-sm-5">
									<div className="Support-Maintenance-img">
										<span><img src="../../images/support.png" /></span>
									</div>
								</div>
							</div>
						</div>
						<hr/>
					</div>
				</section>

				<section className="let-get">
					<div className="container text-center">
						<div className="row">
							<div className="lets-gets-content">
								<h4>Let’s Get Started</h4>
								<p>We need to learn more about your idea so we can marry it with our technical knowledge and help you come up with a winning product strategy. Push the button to let us know the 
								details, and our mobile experts will get back to you soon.</p>
								<a href="#">get a free quote</a>
							</div>
						</div>
					</div>
				</section>
			</section>

			</div>
    );
  }
}
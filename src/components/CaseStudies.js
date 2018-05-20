import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from "react-helmet";

import data from './casestudiesdata';

class TeamMember extends React.Component {
	constructor(props) {
    super(props);
	}
	createRow(){
	  let md = this.props.memberData;
    let row = [];
    for (let i = 0; i < md.length; i++) {
      row.push(<span key={i}><img src={md[i].teamMemberImage} /></span>)
    }
    return row
  }
	render() {
		return (
			<div className="team">
				<h4>Team</h4>
				{this.createRow()}
			</div>
		);
	}
}
class ProjectTechnologies extends React.Component {
	constructor(props) {
    super(props);
	}
	createTech(){
	  let pt = this.props.projectTechnologies;
    let row = [];
    for (let i = 0; i < pt.length; i++) {
      row.push(<span key={i}><a href="#">{pt[i].name}</a></span>)
    }
    return row
  }
	render() {
		return (
			<div className="technologies">
				<h4>Technologies</h4>
				{this.createTech()}
			</div>
		);
	}
}

export default class CaseStudies extends React.Component {
	constructor(props) {
    super(props);
	}
	componentDidMount() {

	}

	render() {
		//console.log(data);
		return (
    	<div>
    		<Helmet>
            <title>About</title>
            <meta name="ROBOTS" CONTENT="NOINDEX, NOFOLLOW" />
            <meta name="description" content="About" />
        </Helmet>

				<section>
					<section className="banner inner-banner banner-works">
						<img src="../../images/top_img_work1.png" />  
						<div className="about-head bnr-hd container">
							<h1>Case Studies</h1>
						</div>
					</section>
			
						<section className="zepable-work-section">
							<div className="container">
								<div className="back-list">
								<ul className="">
									<li>Home</li>
									<li>Case Studies</li>
								</ul>
							</div>
								<div className="tabs text-center">
									<ul className="nav nav-tabs">
				    					<li className="active"><a href="#">ALL</a></li>
				    					<li><a href="#">WEB DEVELOPMENT</a></li>
				   	 					<li><a href="#">RESTFUL APIS</a></li>
				    					<li><a href="#">REACTIVE APPLICATIONS</a></li>
				  					</ul>
								</div>


								{
									data.map(function(el, index){
								    return( 
								    <div key={index}>
											<div className="zepable">
												<div className="row">
													<div className="col-sm-8 zepable-column">
														<span><img src={el.logo} /></span>
														<span>{el.title}</span>
														<p>{el.description}</p>
														<TeamMember memberData={el.teamMembers} />
													  <ProjectTechnologies projectTechnologies={el.technologies} />  
													</div>
													<div className="col-sm-4">
														<div className="view-case-study">
															<Link to={'/case-studies/'+el.title}>VIEW CASE STUDY</Link>
															<img src={el.mobileImage} />
														</div>
													</div>
												</div>
											</div>
					    			</div> 
						    		)
									})
								}	
							</div>
						</section>

					
				</section>
				
				</div>
		);
	}
}


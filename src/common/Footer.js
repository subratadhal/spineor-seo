import React from 'react';
import { Link } from 'react-router';

export default class Header extends React.Component {
	constructor(props) {
    super(props);
	    this.state = {
	    };
	}
  	componentDidMount() {
  	}
  render() {
  	
    return (
		<footer>
		<div className="container-fluid foo-image">
			<div className="container">
				<div className="row">
					<div className="col-sm-4">
						<div className="product-detail">
							<h4>PRODUCTS</h4>
							<div className="product-list">
								<ul>
									<li><a href="">Home</a></li>
									<li><a href="">WHAT WE DO</a></li>
									<li><a href="">Contact</a></li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-sm-4">
						<div className="product-detail">
							<h4>SERVICES</h4>
							<div className="product-list">
								<ul>
									<li><a href="">Web development</a></li>
									<li><a href="">Restful APIs</a></li>
									<li><a href="">Reactive Applications</a></li>
									<li><a href="">Full Mean/Stack Development</a></li>
									<li><a href="">Third Party Integrations</a></li>
									<li><a href="">Machine Lwarning</a></li>
								</ul>
							</div>
						</div>

					</div>
					<div className="col-sm-4">
						<div className="product-detail">
							<h4>CONTACT</h4>
							<div className="product-list">
								<ul>
									<li>+91(991)502-1146</li>
									<li>info@spineor.com</li>
									<li><a href=""><i className="fa fa-facebook-official"></i></a>
										<a href=""><i className="fa fa-linkedin-square"></i></a>
										<a href=""><i className="fa fa-google-plus"></i></a>
										<a href=""><i className="fa fa-twitter"></i></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="foot-info">
					<hr/>
					<p id="cpy">Copyright<span><i className="fa fa-copyright"></i></span>2018-SPINEOR</p>
				</div>
			</div>
			<div className="upper-icon">
				<span><a href=""><i className="fa fa-long-arrow-up"></i></a></span>
			</div>
		</div>
	</footer>
  	);
  }
}




	
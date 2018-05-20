import React from "react";
import Helmet from "react-helmet";

import $ from "jquery";

import Slider from 'react-animated-slider';
//import 'react-animated-slider/build/horizontal.css';

//import { Player, ControlBar, BigPlayButton } from 'video-react';
//import 'video-react/dist/video-react.css';

import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
//import 'react-tabs/style/react-tabs.css';

const videoSources = {
    BigData: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
    BigDataPoster: 'images/Untitled-1.png', 
    BigDataText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    DataAnalysis: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
    DataAnalysisPoster: 'images/Untitled-1.png',
    DataAnalysisText: 'Data Analysis Text Lorem ipsum dolor sit amet',
    DigitalMarketing: 'http://media.w3.org/2010/05/bunny/movie.mp4',
    DigitalMarketingPoster: 'images/Untitled-1.png',
    DigitalMarketingText: 'Digital Marketing Lorem ipsum dolor sit amet',
    MachineLearning: 'http://media.w3.org/2010/05/video/movie_300.webm',
    MachineLearningPoster: 'images/Untitled-1.png',
    MachineLearningText: 'Machine Learning Lorem ipsum dolor sit amet'
};

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
              lat: 59.95,
              lng: 30.33
            },
            zoom: 11,
            videoSource: videoSources['BigData'],
            posterSource: videoSources['BigDataPoster'],
            videoDescriptionSources: videoSources['BigDataText'],
            tabIndex: 0 //tab
        }
        this.play = this.play.bind(this);
        this.load = this.load.bind(this);
        //this.updateSliderVideo = this.updateSliderVideo.bind(this);
    }

    componentDidMount() {
        // subscribe state change
        //this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
    }

    // updateSliderVideo(){
    //     let val = $('div.current div.inner').data('id');
    //     let posterVeriable = val + 'Poster';
    //     let videoDescriptionVeriable = val + 'Text';
    //     this.setState({
    //         videoSource: videoSources[val],
    //         posterSource: videoSources[posterVeriable],
    //         videoDescriptionSources: videoSources[videoDescriptionVeriable]
    //     });
    //     this.refs.player.subscribeToStateChange(this.handleStateChange.bind(this));
    //     this.refs.player.load();
    // }


    handleStateChange(state, prevState) {
        this.setState({
          player: state
        });
      }
      play() {
        this.refs.player.play();
      }
      load(){
        this.refs.player.load();
      }

    render( ) {


        const content = [
            {
                id: 'BigData',
                title: 'Big Data',
                description:'how data analysis increase your sales?',
                image: 'http://dev.spineor.com/remote-images/banner1.jpg',
            },
            {
                id: 'DataAnalysis',
                title: 'Data Analysis',
                description:'',
                image: 'http://dev.spineor.com/remote-images/banner2.jpg',
            },
            {
                id: 'DigitalMarketing',
                title: 'Digital Marketing',
                description:'',     
                image: 'http://dev.spineor.com/remote-images/banner3.jpg',
            },
            {
                id: 'MachineLearning',
                title: 'Machine Learning',
                description:'',
                image: 'http://dev.spineor.com/remote-images/banner4.jpg',
            }
        ];

        return (
            <div>
                <Helmet>
		            <title>Home</title>
		            <meta name="ROBOTS" CONTENT="NOINDEX, NOFOLLOW" />
		            <meta name="description" content="Home" />
		        </Helmet>
                

                                <Slider className="slider-wrapper" onSlideChange={this.updateSliderVideo} >
                    {content.map((item, index) => (
                        <div
                            key={index}
                            className="slider-content"
                            style={{ background: `url('${item.image}') no-repeat center center` }}
                        >
                            <div className="inner" data-id={item.id}>
                                <h1 className="headingText">{item.title}</h1>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>

                <section className="video-section">
                    <div className="container">
                        <div className="row">
                            <div className="content-wrapper col-sm-6">
                                <p>{this.state.videoDescriptionSources}</p>
                                <span></span>
                                <ul>
                                    <li onClick={this.play}><i className="fa fa-play"></i></li>
                                    <li><p><span>watch</span>intro video</p></li>
                                    
                                </ul>
                            </div>
                            <div className="video-wrapper col-sm-6">
                            {/*
                                <Player
                                    ref="player"
                                    width="400"
                                    height="400"
                                    aspectRatio = "4:3"
                                    poster={this.state.posterSource}
                                >
                                    <source src={this.state.videoSource} />
                                    <BigPlayButton position="center" />
                                </Player>
                            */}
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="agile-development">
                                <h1>WHAT WE DO</h1>
                            </div>
                            <div className="col-sm-4">
                                <a href="what-we-do/dynamic-web-solutions" className="frame">
                                    <div className="group">
                                        <img src="images/Untitled-1.png"/>
                                    </div>
                                    <div className="dyanamic-web-solutions">
                                        <h4>DYANAMIC WEB SOLUTIONS</h4>
                                    </div>
                                    <div className="at-spineor-we-explore-learn-an">
                                        <p>At Spineor, we explore, learn and develop the latest trends in the website development. </p>
                                    </div>
                                    <div className="view-more">
                                        <a className="frame1" href="#">VIEW MORE</a>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-4">
                                <a href="what-we-do/data-analytics" className="frame">
                                    <div className="group">
                                        <img src="images/icon2.png"/>
                                    </div>
                                    <div className="dyanamic-web-solutions">
                                        <h4>DATA ANALYTICS</h4>
                                    </div>
                                    <div className="at-spineor-we-explore-learn-an">
                                        <p>We, understand, clean and enrich your massive data. </p>
                                    </div>
                                    <div className="view-more">
                                        <a className="frame1" href="#">VIEW MORE</a>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-4">
                                <a href="what-we-do/devops-and-testing" className="frame">
                                    <div className="group">
                                        <img src="images/icon3.png"/>
                                    </div>
                                    <div className="dyanamic-web-solutions">
                                        <h4>DEVOPS AND TESTING</h4>
                                    </div>
                                    <div className="at-spineor-we-explore-learn-an">
                                        <p>Our DevOps engineers and Quality analyst accelerate the release of applications into productions.</p>
                                    </div>
                                    <div className="view-more">
                                        <a className="frame1" href="#">VIEW MORE</a>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>



                <section>
                    <div className="container">
                        <div className="row">
                            <div className="agile-development">
                                <h1>AGILE DEVELOPMENT</h1>
                            </div>
                            <div className="col-sm-7 agile-wrapper">
                                <div className="agile-development-image">
                                     <img className="agile-image" src="images/agile_img.jpg"/>
                                </div>
                            </div>
                            <div className="col-sm-5 we-use-wrapper">
                                <div className="we-use-agile-method">
                                    <span>WE USE</span>
                                    <h6>AGILE METHODOLOGY</h6>
                                </div>
                                <div className="increasing-prosperity-in-our-l">
                                    <p>Increasing prosperity in our lives can be accomplished by having the right frame of mind. The truth is, our thoughts are very powerful.</p>
                                </div>
                                <div className="agile-proposi">
                                    <img src="images/sdfs.png"/>
                                    <span>
                                        <h6>AGILE DEVLOPMENT</h6>
                                        VALUE PROPOSITIO
                                    </span>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section  className="w-c-section">
                    <div className="container">
                        <div className="row">
                            <div className="what-we-can-do-for-you">
                                <h1>WHAT WE CAN DO FOR YOU</h1>
                            </div>
                            <div className="col-sm-6 col-md-4 remove ">
                                <a href="/service/website-development" className="Web-Development-heading">
                                    <div className="Web-Development">
                                        <span><img src="images/webdev.png"/></span>
                                        <span>Web Development</span>
                                    </div>
                                    <div className="Our-developers-build-not">
                                        <p>Our developers build not only attractive but simple 
                                        and user-friendly solutions to your eCommerce 
                                        business along with massive database management. 
                                        The team understands the demands of the project 
                                        may it be minor or major.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-4 remove">
                                <a href="/service/restfull-apis" className="Web-Development-heading">
                                    <div className="Web-Development">
                                        <span><img src="images/resful_api.png"/></span>
                                        <span>Restful APIs</span>
                                    </div>
                                    <div className="Our-developers-build-not">
                                        <p>We offer API integration and development services to suit the web and mobile application development requirements of the clients.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-4 remove">
                                <a href="/service/reactive-applications" className="Web-Development-heading">
                                    <div className="Web-Development">
                                        <span><img src="images/React.png"/></span>
                                        <span>Reactive Applications</span>
                                    </div>
                                    <div className="Our-developers-build-not">
                                        <p>We offer API integration and development services to suit the web and mobile application development requirements of the clients.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-4 remove">
                                <a href="/service/full-mean-stack-development" className="Web-Development-heading">
                                    <div className="Web-Development">
                                        <span><img src="images/Mean.png"/></span>
                                        <span>Full/Mean stack development</span>
                                    </div>
                                    <div className="Our-developers-build-not">
                                        <p>We are working exceptionally well for integrating advanced online designing technologies like Angular JS/NodeJS/ExpressJS/REACT JS. We are well-versed with administrating databases like MongoDB/Cassandra/</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-4 remove">
                                <a href="/service/third-party-integrations" className="Web-Development-heading">
                                    <div className="Web-Development">
                                        <span><img src="images/Third_party.png"/></span>
                                        <span>Third Party Integrations</span>
                                    </div>
                                    <div className="Our-developers-build-not">
                                        <p>We offer seamless and tricky third party integrations – Twitter and Coveritlive. Our Product Managers are constantly on the look-out for new apps, technical advances and trends – judging their suitability for inclusion into Sunshine.</p>
                                    </div>
                                </a>
                            </div>
                            <div className="col-sm-6 col-md-4 remove">
                                <a href="/service/machine-learning" className="Web-Development-heading">
                                    <div className="Web-Development">
                                        <span><img src="images/mACHINE.png"/></span>
                                        <span>Machine Learning</span>
                                    </div>
                                    <div className="Our-developers-build-not">
                                        <p>Our Data Scientists take the time to train the data into information, and information into insight. Our robust data analysis can increase your business productivity by turning raw data to better inform business decisions.</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

        <section>
                    <div className="container">
                        <div className="row">
                            <div className="OUR-WORK">
                                <h1>OUR WORK</h1>
                            </div>
                            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                                <div className="col-sm-6">
                                    <div className="industries-we-cater">
                                        <h4>Industries we cater</h4>
                                    </div>
                                    <TabList>
                                        <Tab>Hospitality</Tab>
                                        <Tab>Finance</Tab>
                                        <Tab>Retail</Tab>
                                        <Tab>Healthcare</Tab>
                                    </TabList>
                                    <div className="view-project">
                                        <a className="frame2" href="#">VIEW MORE <i className="fa fa-long-arrow-right"></i></a>
                                    </div>
                                    <div className="see-all-project">
                                        <a href="">SEE ALL PROJECT</a>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <TabPanel>
                                        <div className="OUR-WORK-image">
                                             <img className="work-image" src="http://dev.spineor.com/remote-images/project1.jpg"/>
                                             <span className="project-Logo"><img src="http://dev.spineor.com/remote-images/project1logo.png"/></span>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="OUR-WORK-image">
                                             <img className="work-image" src="http://dev.spineor.com/remote-images/project2.jpg"/>
                                             <span className="project-Logo"><img src="http://dev.spineor.com/remote-images/project2logo.png"/></span>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="OUR-WORK-image">
                                             <img className="work-image" src="http://dev.spineor.com/remote-images/project3.jpg"/>
                                             <span className="project-Logo"><img src="http://dev.spineor.com/remote-images/project3logo.png"/></span>
                                        </div>
                                    </TabPanel>
                                    <TabPanel>
                                        <div className="OUR-WORK-image">
                                             <img className="work-image" src="http://dev.spineor.com/remote-images/project4.jpg"/>
                                             <span className="project-Logo"><img src="http://dev.spineor.com/remote-images/project4logo.png"/></span>
                                        </div>
                                    </TabPanel>
                                </div>
                            </Tabs>
                        </div>
                    </div>
                </section>                          


                <section>
                    <div className="container">
                        <div className="row">
                            <div className="our-process">
                                <h1>OUR PROCESS</h1>
                            </div>
                            <div className="col-sm-4">
                                <div className="our-process-image">
                                    <img src="images/process_icon1.png"/>
                                </div>
                                <div className="consulting">
                                    <h4>01</h4>
                                    <h6>CONSULTING</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="our-process-image">
                                    <img src="images/process_icon2.png"/>
                                </div>
                                <div className="consulting">
                                    <h4>02</h4>
                                    <h6>BUSINESS PROCESS</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="our-process-image">
                                    <img src="images/process_icon3.png"/>
                                </div>
                                <div className="consulting">
                                    <h4>03</h4>
                                    <h6>INNOVATIONS</h6>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                        


    <section className="techno">
        <div className="container">
            <div className="Technologies">
                <span>Technologies</span>
                <div className="techo-img">
                    <img src="images/img-tech.png"/>
                </div>
                

            </div>
        </div>
    </section>

    

    <section className="we-need-to">
        <div className="container text-center">
            <div className="row">
                <div className="lets-get">
                    <h4>Let’s Get Started</h4>
                    <p>We need to learn more about your idea so we can marry it with our technical knowledge and help you come up with a winning product strategy. Push the button to let us know the 
                    details, and our mobile experts will get back to you soon.</p>
                    <a href="#" className="get-a-free">get a quote</a>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div className="container">
            <div className="get-in-section">
                    <div className="get-in-touch">
                        <h2 className="headingh2">GET IN TOUCH</h2>
                    </div>
                    <div className="col-sm-6">
                        <div className="we-want">
                            <span>We want to hear from you!</span>
                        </div>
                        
                        <form>
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
                                
                                <textarea className="form-control" rows="5" id="comment">Message</textarea>
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
                                        <span id="in-img"><img src="images/Contact_big_icon1_blue.png"/></span>
                                        <p><span>Location:</span>
                                        E-261, IT TOWER, AirportRoad, Mohali (PB)</p>
                                    </div>
                                    </li>
                                    <li>
                                        <div className="location">
                                        <span id="in-img"><img src="images/Contact_big_icon3_blue.png"/></span>
                                        <p><span>Phone:</span>
                                        0172-5058146 ,       91-99150-21146</p>
                                    </div>
                                    </li>
                                    <li>
                                        <div className="location">
                                        <span id="in-img"><img src="images/Contact_big_icon2_blue.png"/></span>
                                        <p><span>Email:</span>
                                        info@spineor.com</p>
                                    </div>
                                    </li>
                                    <li>
                                        <div className="location">
                                        <span id="in-img"><img src="images/Contact_big_icon4_blue.png"/></span>
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

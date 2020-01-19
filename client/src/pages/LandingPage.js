import React from "react";
import { Container, Col , Row } from "../components/Grid/index";
import Navbar from "../components/NavBar";
import htmlJs from "../htmlJavascript.json";
import nodeJS from "../nodeJS.json";
import reactJS from "../reactJS.json";
import { Link } from "react-router-dom";
import ProjectCarousel from "../components/carousel/index";
import Particles from 'react-particles-js';
import { Form, Button, Carousel, Fade} from "react-bootstrap";
import axios from "axios"
import "./LandingPage.css";
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"




export default class LandingPage extends React.Component {
        constructor(props){
            super(props)

            this.state = {
				htmlVisible: false,
            javascriptVisible: false,
            handlebarsVisible: false,
            reactVisible : true,
			nodeVisible: false,
			firstname: "",
			lastname: "",
			subject: "",
			message: ""

            }
        }
        
		handleHtml = (e) => {
			this.setState({ htmlVisible: true,
			 reactVisible : false,
			 nodeVisible: false})
		}
		handleNode = (e) => {
		  this.setState({ htmlVisible: false,
		   reactVisible : false,
		   nodeVisible: true})
		}
		handleReact = (e) => {
		 this.setState({ htmlVisible: false,
		   reactVisible : true,
		   nodeVisible: false,})
		}
		handleChange = (e) => {
			this.setState({[e.target.name]: e.target.value })
		}

		handleSubmit = (e) => {
			e.preventDefault();
	
			const { firstname, lastname, subject, message} = this.state;
	
			const form = axios.post("/api/form", {
				firstname,
				lastname,
				subject,
				message
			})
	
			console.log(form)
			this.setState({ firstname:"", lastname:"",subject:"",message:""})
		}
	
       
        render() {
            return (
              
				   <Container fluid>
                   <div className="overlay"><Particles  params={{
	    "particles": {
	        "number": {
	            "value": 160,
	            "density": {
	                "enable": false
	            }
	        },
	        "size": {
	            "value": 3,
	            "random": true,
	            "anim": {
	                "speed": 4,
	                "size_min": 0.3
	            }
	        },
	        "line_linked": {
	            "enable": true
	        },
	        "move": {
	            "random": true,
	            "speed": 1,
	            "direction": "top",
	            "out_mode": "out"
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "bubble"
	            },
	            "onclick": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        },
	        "modes": {
	            "bubble": {
	                "distance": 250,
	                "duration": 2,
	                "size": 0,
	                "opacity": 0
	            },
	            "repulse": {
	                "distance": 400,
	                "duration": 4
	            }
	        }
	    }
	}} /></div>
                
				<ScrollAnimation delay={500} animateIn="fadeIn" >
				<div className="Text" style={{ fontFamily: "'VT323', monospace"}}>
                
				<strong><h1>Welcome Stranger,</h1></strong>
				<br />
				<strong><h1>My name is </h1>
				<h1 style={{color: "red"}}>Jonathan Diaz</h1></strong>
					
				<br />
				<strong><h1>Full Stack Web Developer</h1></strong> 
				<br />
				<Link to="/about"><Button variant="primary">View More -></Button></Link>
			</div>
				</ScrollAnimation>
                <div className="NavWrapper">
                <Navbar/>
                </div>
				<div className="AboutWrapper">
					<span className="aboutHeading">
					<h1>About</h1>
					</span>
					
                <ScrollAnimation 
					animateIn='bounceInRight'
					animateOut='bounceOutLeft'>
				   <div className="aboutMe">
					<Row>
					<Col size="sm-2 md-4 lg-6">
						<div className="aboutPic">
					<img  className="img-fluid"style={{ display:"inline-block", margin:"45px",borderRadius:"300px", height:"300px", boxShadow: "0 3px 6px #999, 0 3px 6px #999"}}alt="Jonathans image" src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg" />
					</div></Col>
					
					<Col size="6">
                    <div className="aboutDesc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                    </Col>
					</Row>
					<Row>
						<Col size="12">
						<span className="langHeading">
						<h4>Familiar with</h4>
					</span>
					<div className="Badges">
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" />
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://fuzati.com/wp-content/uploads/2016/12/CSS-Logo.png" />
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://api.badgr.io/public/badges/kQBWBLydRGOq1148Kng3sw/image" />
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="http://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/f4a5b21d-66fa-4885-92bf-c4e81c06d916/Image/e5eee315a17de0d7f56117077eb71fa9/mongo.png" />
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" />
					</div>
						
						</Col>
					</Row>
					</div>
					</ScrollAnimation>
				   
                   
				</div>

				<div className="projectsWrapper">
						<span className = "projectHeading">
						<h1>Projects</h1>
						</span>
					
			<ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
								
			<div className="projectDisplay">
								<Row>
									<Col size="12">
									<div className="buttons">
									<Button onClick={this.handleHtml}variant="outline-warning">HTML/Javascript</Button>     
									<Button onClick={this.handleNode} variant="outline-dark">Node</Button>  
									 <Button onClick={this.handleReact} variant="outline-danger">React</Button>
									</div>
									</Col>
								</Row>
                 
				  <Row>
					  <Col size="12">
						{this.state.reactVisible ? <ProjectCarousel projects={reactJS}/> : null}
						{this.state.nodeVisible ? <ProjectCarousel projects={nodeJS}/> : null}
						{this.state.htmlVisible ? <ProjectCarousel projects={htmlJs}/> : null}
						
						
						  


					  </Col>
				  </Row>
              </div>
			</ScrollAnimation>
						
				</div>

				<div className="myOfferWrapper">
				<span className = "offerHeading">
							<h1>What can i offer?</h1>
						</span>
				</div>

				<div className="contactWrapper">
				<span className = "contactHeading">
							<h1>Contact</h1>
							<p style={{ color:"cyan"}}>Have a question or want to work together?</p>
						</span>

						<div className="formWrapper">
						<Form onSubmit={this.handleSubmit}>
					<Form.Row>
						<Form.Group  controlId="formGridFirstName">
						<Form.Label>First Name</Form.Label>
						<Form.Control type="text"  onChange={this.handleChange} name="firstname"  placeholder="Enter First Name" />
						</Form.Group>

						<Form.Group  controlId="formGridLastName">
						<Form.Label>Last Name</Form.Label>
						<Form.Control type="text"  onChange={this.handleChange} name="lastname" value={this.state.lastname} placeholder="Enter Last Name" />
						</Form.Group>
					</Form.Row>

					<Form.Group controlId="formGridSubject">
						<Form.Label>Subject</Form.Label>
						<Form.Control style={{width:"400px"}}  onChange={this.handleChange}value={this.state.subject} name="subject" placeholder="Enter subject" />
					</Form.Group>

					<Form.Group controlId="formGridSubjectDetails">
						<Form.Label>Subject Details</Form.Label>
						<br />
						<textarea name="message" onChange={this.handleChange} value={this.state.message} rows="5" cols="70"></textarea> 
					</Form.Group>


					<Button variant="danger" type="submit">
						Send
					</Button>
					</Form>
						</div>
				</div>
                    
             
				</Container>
			
            )
        }
}
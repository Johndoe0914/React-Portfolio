import React from "react";
import { Container, Col , Row } from "react-bootstrap";
// import Navbar from "../components/NavBar";
import htmlJs from "../htmlJavascript.json";
import nodeJS from "../nodeJS.json";
import reactJS from "../reactJS.json";
import { Link } from "react-router-dom";
import ProjectCarousel from "../components/carousel/index";
import Particles from 'react-particles-js';
import { Form, Button} from "react-bootstrap";
import axios from "axios"
import "./LandingPage.css";
import ScrollAnimation from "react-animate-on-scroll"
import "animate.css/animate.min.css"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import CardList from "../components/CardList/Card-List";
import {StickyContainer, Sticky} from "react-sticky";






export default class LandingPage extends React.Component {
        constructor(props){
            super(props)

            this.state = {
				htmlVisible: true,
            javascriptVisible: false,
            handlebarsVisible: false,
            reactVisible : false,
			nodeVisible: false,
			msgSent: false,
			name:"",
			subject: "",
			message: ""

			}
			this.handleSubmit = this.handleSubmit.bind(this);
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

		async handleSubmit(e) {
			e.preventDefault();
			
	
			const { name, subject, message} = this.state;

		

	
			const form =  await axios.post("/api/form", {
				name,
				subject,
				message
			}).catch((err) => {
				console.log(err)
			})

			if(form.status === 200) {
				toast.success("Message Sent")
				this.setState({ name:"",subject:"",message:""})
			} else {
				toast.error("Error Occurred")
			}
					
			console.log("Form",form)
			
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
				<div className="Text" >
                
				<strong><h1>Welcome Stranger,</h1></strong>
				<br />
				<strong><h1>My name is </h1>
				<h1 style={{color: "red"}}>Jonathan Diaz</h1></strong>
					
				<br />
				<strong><h1>Full Stack Web Developer</h1></strong> 
				<br />
				<a href="#about"><Button variant="outline-danger">View More -></Button></a>
			</div>
				</ScrollAnimation>


                <div className="NavWrapper">
							<div className="">
				<nav  className="navbar  navbar-black bg-black  navbar-expand-lg">
			
			<div className="scrollspy">
			
			<a className="navbar-brand" href="#about">About</a>
			<a className="navbar-brand" href="#portfolio">Portfolio</a>
			<a className="navbar-brand" href="#resume">Resume</a>
			</div>
			
			</nav>
  			 </div>
                </div>

				<ScrollAnimation 
					delay={100} animateIn="fadeIn"
					animateOut='bounceOutLeft'>
				<div id="about"className="AboutWrapper">
					<span className="aboutHeading">
					<h1>About</h1>
					</span>
					
              
				   <div className="aboutMe">
					<Row>
					<Col xs={12}>
						<div className="aboutPic">
					<img  className="img-fluid" style={{height:"300px", width:"300px", borderRadius:"50%"}}alt="baby giraffe" src="https://i.imgur.com/FNFj6z8.jpg" />
					</div></Col>
					
					
					<Col xs={12} >
                    <div className="aboutDesc"> Welcome to my portfolio, My name is Jonathan Diaz i am 20 years old and also a UCF Coding bootcamp graduate .I currently reside in Kissimmee, Florida. I am a young motivated individual who wants to strive and do his best in everything he does. I would describe myself as being a proactive ,dynamic and a team player. My goal is to find a great company i can work for to further develop my skills as a developer and gain experience as i work. I am also always seeking to expand on my current knowledge base. Feel free to email me down below !  </div>
                    </Col>
					</Row>
					<Row>
						<Col >
						<br />
						<span className="langHeading">
						<h4>Familiar with</h4>
					</span>
					<div className="Badges">
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" />
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://fuzati.com/wp-content/uploads/2016/12/CSS-Logo.png" />
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://api.badgr.io/public/badges/kQBWBLydRGOq1148Kng3sw/image" />
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://sabe.io/tutorials/getting-started-with-react/react-logo.png" />
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://www.iforium.com/wp-content/uploads/nodejs-new-pantone-white-1030x631.png" />
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="data:image/png;base64,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" />
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" />
					</div>
						
						</Col>
					</Row>
					</div>
					
				   
                   
				</div>
				</ScrollAnimation>

				<ScrollAnimation animateIn='fadeIn' animateOut="fadeOut">
		
				<div id="portfolio" className="projectsWrapper">
						<span className = "projectHeading">
						<h1>Projects</h1>
						</span>
					
							
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
						<div className="projectContainer">
						{this.state.reactVisible ?<CardList projects={reactJS}/> : null}
						 {this.state.nodeVisible ? <CardList projects={nodeJS}/>: null} 
						{this.state.htmlVisible ? <CardList projects={htmlJs}/> : null} 
						</div>
						
						
						  


					  </Col>
				  </Row>
              </div>

						
				</div>
				</ScrollAnimation>

				{/* <div id="resume"className="myOfferWrapper">
				<span className = "offerHeading">
							<h1>What can i offer?</h1>
						</span>

						<div className="myOffer">
							<p>Full Stack Web Developer with MongoDB, Express, React, Node.js (MERN). Experienced in building CRUD applications and using RESTful API's with Node and Express. Also have experience using MySql and MongoDB databases.Some experience with Passport JS and JWT. Common libraries of use: Axios, Mongoose, Express, react-router. Common use of UI Libraries: Bootstrap 4, React-Bootstrap. There is still more to come in the future so watch out for that.
							</p>
							<Button variant="outline-primary">Resume</Button>
						</div>
				</div> */}
				<ScrollAnimation delay={500} animateIn="fadeIn" >
				<div className="contactWrapper">
				<span className = "contactHeading">
							<h1>Contact</h1>
							<p style={{ color:"cyan"}}>Have a question or want to work together?</p>
						</span>

						<div className="formWrapper">
						<Form onSubmit={this.handleSubmit} style={{color:"white"}}>
				
						<Form.Group style={{ marginRight:"20px", width:"300px"}} controlId="formGridFirstName">
						<Form.Label>Name</Form.Label>
						<Form.Control  type="text"  onChange={this.handleChange} name="name"  placeholder="Enter Name" />
						</Form.Group>

					
				

					<Form.Group controlId="formGridSubject">
						<Form.Label>Subject</Form.Label>
						<Form.Control style={{width:"400px"}}  onChange={this.handleChange}value={this.state.subject} name="subject" placeholder="Enter subject" />
					</Form.Group>

					<Form.Group controlId="formGridSubjectDetails">
						<Form.Label>Message</Form.Label>
						<br />
						<textarea name="message" onChange={this.handleChange} value={this.state.message} rows="5" cols="70" placeholder="Enter message"></textarea> 
					</Form.Group>


					<Button variant="outline-danger" type="submit">
						Send
					</Button>
					</Form>
						</div>
				</div>
				</ScrollAnimation>

				<footer className="footer">
					<div className="importantLinks">
						
						<ul style={{ listStyle:"none", color:"white", display:"inline-flex",}}>
							<li>
								
								<a  href="http://github.com/johndoe0914"><img style={{display:"inline-block", width:"55px", height:"55px", margin:"30px"}}alt="htmlbadge" src="http://pngimg.com/uploads/github/github_PNG40.png" /></a>
								
							</li>
							<li>
							<a href="https://www.linkedin.com/in/jonathan-diaz-46a7ba15b/"><img style={{display:"inline-block", width:"55px", height:"55px", margin:"30px"}}alt="htmlbadge" src="https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png" /></a>
								
							</li>
							<li>
							<a href="https://www.linkedin.com/in/jonathan-diaz-46a7ba15b/"><img style={{display:"inline-block", width:"55px", height:"55px", margin:"30px"}}alt="htmlbadge" src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19753.png" /></a>
							
							</li>
						</ul>
					</div>

					<p style={{ position: "relative", textAlign:"center", marginTop:"60px"}}>Jonathan Diaz © 2020 </p>
				</footer>
				
          <ToastContainer />
                    
             
				</Container>
			
            )
        }
}
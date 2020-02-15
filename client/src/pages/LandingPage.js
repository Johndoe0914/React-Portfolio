import React from "react";
import { Container, Col , Row } from "../components/Grid/index";
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
import ScrollSpy from 'react-scrollspy';






export default class LandingPage extends React.Component {
        constructor(props){
            super(props)

            this.state = {
				htmlVisible: false,
            javascriptVisible: false,
            handlebarsVisible: false,
            reactVisible : true,
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
				<div className="Text" style={{}}>
                
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
				<ScrollSpy items={['about', 'portfolio', 'resume']} currentClassName="is-current">
					<li><a href="#about">About</a></li>
					<li><a href="#portfolio">Portfolio</a></li>
					<li><a href="#resume">Resume</a></li>
				</ScrollSpy>
			{/* <a className="navbar-brand" href="#about">About</a>
			<a className="navbar-brand" href="#portfolio">Portfolio</a>
			<a className="navbar-brand" href="#resume">Resume</a> */}
			</div>
			
			</nav>
  			 </div>
                </div>


				<div id="about"className="AboutWrapper">
					<span className="aboutHeading">
					<h1>About</h1>
					</span>
					
                <ScrollAnimation 
					delay={100} animateIn="fadeIn"
					animateOut='bounceOutLeft'>
				   <div className="aboutMe">
					<Row>
					<Col size="sm-2 md-4 lg-6">
						<div className="aboutPic">
					<img  className="img-fluid"style={{ display:"inline-block", margin:"45px",borderRadius:"300px", height:"300px", width:"300px" ,boxShadow: "0 3px 6px #999, 0 3px 6px #999"}}alt="baby giraffe" src="https://i.imgur.com/7TgLRdo.jpg?1" />
					</div></Col>
					
					<Col size="6">
                    <div className="aboutDesc"> Welcome to my portfolio, My name is Jonathan Diaz i am 20 years old and also a UCF Coding bootcamp graduate .I currently reside in Kissimmee, Florida. I am a young motivated individual who wants to strive and do his best in everything he does. I would describe myself as being a proactive ,dynamic and a team player. My goal is to find a great company i can work for to further develop my skills as a developer and gain experience as i work. I am also always seeking to expand on my current knowledge base. Feel free to email me down below !  </div>
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

				<div id="portfolio" className="projectsWrapper">
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
						<div className="projectContainer">
						{this.state.reactVisible ?<CardList projects={reactJS}/> : null}
						 {this.state.nodeVisible ? <CardList projects={nodeJS}/>: null} 
						{this.state.htmlVisible ? <CardList projects={htmlJs}/> : null} 
						</div>
						
						
						  


					  </Col>
				  </Row>
              </div>
			</ScrollAnimation>
						
				</div>

				<div id="resume"className="myOfferWrapper">
				<span className = "offerHeading">
							<h1>What can i offer?</h1>
						</span>

						<div className="myOffer">
							<p>Full Stack Web Developer with MongoDB, Express, React, Node.js (MERN). Experienced in building CRUD applications and using RESTful API's with Node and Express. Also have experience using MySql and MongoDB databases.Some experience with Passport JS and JWT. Common libraries of use: Axios, Mongoose, Express, react-router. Common use of UI Libraries: Bootstrap 4, React-Bootstrap. There is still more to come in the future so watch out for that.
							</p>
							<Button variant="outline-primary">Resume</Button>
						</div>
				</div>

				<div className="contactWrapper">
				<span className = "contactHeading">
							<h1>Contact</h1>
							<p style={{ color:"cyan"}}>Have a question or want to work together?</p>
						</span>

						<div className="formWrapper">
						<Form onSubmit={this.handleSubmit} style={{color:"darkslategrey"}}>
				
						<Form.Group style={{ marginRight:"20px", width:"300px"}} controlId="formGridFirstName">
						{/* <Form.Label>First Name</Form.Label> */}
						<Form.Control  type="text"  onChange={this.handleChange} name="name"  placeholder="Enter Name" />
						</Form.Group>

					
				

					<Form.Group controlId="formGridSubject">
						{/* <Form.Label>Subject</Form.Label> */}
						<Form.Control style={{width:"400px"}}  onChange={this.handleChange}value={this.state.subject} name="subject" placeholder="Enter subject" />
					</Form.Group>

					<Form.Group controlId="formGridSubjectDetails">
						{/* <Form.Label>Subject Details</Form.Label> */}
						<br />
						<textarea name="message" onChange={this.handleChange} value={this.state.message} rows="5" cols="70" placeholder="Enter message"></textarea> 
					</Form.Group>


					<Button variant="outline-danger" type="submit">
						Send
					</Button>
					</Form>
						</div>
				</div>

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
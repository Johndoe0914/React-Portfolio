import React from "react";
import { Container, Col , Row } from "../components/Grid/index";
import Button from "react-bootstrap/Button";
import Navbar from "../components/NavBar";
import { Link } from "react-router-dom";
import Particles from 'react-particles-js';
import "./LandingPage.css";




export default class LandingPage extends React.Component {
        constructor(props){
            super(props)

            this.state = {

            }
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
                <div className="NavWrapper">
                <Navbar/>
                </div>
				<div className="AboutWrapper">
					<span className="aboutHeading">
					<h1>About</h1>
					</span>
					<Row>
                    <div className="aboutMe">
						<Col size="6">
						<div className="aboutPic">
					<img style={{ display:"inline-block", margin:"45px",borderRadius:"300px", height:"300px", boxShadow: "0 3px 6px #999, 0 3px 6px #999"}}alt="Jonathans image" src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg" />
					</div></Col>
					
					<Col size="6">
                    <div className="aboutDesc"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
                    </Col>
					</div>
                    </Row>
				</div>

				<div className="projectsWrapper">
						<span className = "projectHeading">
							<h1>Projects</h1>
						</span>
				</div>

				<div className="myOfferWrapper">
				<span className = "offerHeading">
							<h1>What can i offer?</h1>
						</span>
				</div>

				<div className="contactWrapper">
				<span className = "contactHeading">
							<h1>Contact</h1>
						</span>
				</div>
                    
             
				</Container>
               
            )
        }
}
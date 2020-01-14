import React from "react";
import { Container } from "../components/Grid/index";
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
               
                <div className="Wrapper">
                      
                <div className="overlay">
                <Particles   params={{
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
	}}/>
                </div>
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
                    
                </div>
               
            )
        }
}
import React from "react";
import { Container } from "../components/Grid/index";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
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
                
                <div className="Text">
                    <strong><h1>Welcome Stranger,</h1></strong>
                    <br />
                    <strong><h1>My name is Jonathan Diaz</h1></strong>
                    <br />
                    <strong><h1>Full Stack Web Developer</h1></strong> 
                    <br />
                    <Link to="/about"><Button variant="primary">View More -></Button></Link>
                </div>
                    
                </div>
               
            )
        }
}
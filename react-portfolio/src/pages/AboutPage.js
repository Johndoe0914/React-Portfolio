import React from "react";
import { Col, Row, Container } from "../components/Grid/index";
import { Form, Button} from "react-bootstrap";
import axios from "axios"
import "./AboutPage.css";



export default class AboutPage extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
           gif: ""

        }
    }

    componentDidMount() {
        document.querySelector("nav")
    }
    handleGif = (e) => {
        axios.get("http://api.giphy.com/v1/gifs/trending&api_key=D1u3m0JM6Q9TKxw8xV46SShfeCqx5xUI&limit=1")
        .then(res => {
            console.log(res.data)
            let image = res.data
            this.setState({ gif: image})
        })
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <Container fluid>
            <div className="profileStuff">
            <Row >
                <Col size="md-4">
                <div className="pictureWrapper">
    
                    <img style={{ display:"inline-block", margin:"45px",borderRadius:"300px", height:"325px", boxShadow: "0 3px 6px #999, 0 3px 6px #999"}}alt="Jonathans image" src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg" />

                    
                  
                </div>
                </Col>
                <Col size="md-8">
                <div className="AboutMe">
                <h1 style={{paddingLeft:"20px"}}>Welcome , here is a little about me </h1>
                <hr />
               
               <p style={{padding:"30px", fontSize:"x-large", fontFamily: "'VT323', monospace"}}>My name is Jonathan Diaz i am 19 years old,i am a UCF Coding bootcamp graduate .I currently reside in Kissimmee, Florida. I am a young motivated individual who wants to strive in everything he does. I would describe myself as being a proactive ,dynamic and a team player. I consider myself these things because during the coding bootcamp projects i made sure to get my part of the project completed as soon as i could so that we could revise. I love coming up with new ideas and seeing them come to life. I am always seeking to expand on my current knowledge base . Feel free to email me down below ! </p>
          
                </div>
                </Col>
            </Row>
            </div>

            <Row >
                <Col size="md-12">
                <div className="parallax" >

                </div>
                </Col>
            </Row>

            <Row>
            <Col size="md-12">
                <div className="profileOffer">
                
                
                <h1 style={{textAlign:"center"}}>What do i offer?</h1>
                <hr />
                <p style={{padding:"30px", fontFamily: "'VT323', monospace", fontSize:"x-large"}}>
                    Full Stack Web Developer with MongoDB, Express, React, Node.js (MERN). Experienced in building CRUD applications and using RESTful API's with Node and Express. Also have experience using MySql and MongoDB databases.Some experience with Passport JS and JWT. Common libraries of use: Axios, Mongoose, Express, react-router. Common use of UI Libraries: Bootstrap 4, React-Bootstrap. There is still more to come in the future so watch out for that.
                </p>
                </div>
                <div className="Badges">
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" />
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://banner2.kisspng.com/20180513/iyq/kisspng-cascading-style-sheets-css3-logo-html-5af803eb813e47.1360807815262033715294.jpg" />
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="http://pluspng.com/img-png/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png" />
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://i.dlpng.com/static/png/427165_thumb.png" />
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="http://www.logospng.com/images/68/image-logo-in-bootstrap-68447.png" />
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://zdnet3.cbsistatic.com/hub/i/r/2018/02/16/8abdb3e1-47bc-446e-9871-c4e11a46f680/resize/470xauto/2ea638bf5532abe5081dabb0fbecbc2d/mongo-db-logo.png" />
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://pngimg.com/uploads/mysql/mysql_PNG1.png" />
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://miro.medium.com/max/480/1*To2H39eauxaeYxYMtV1afQ.png" />
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://www.ateamindia.com/wp-content/uploads/2019/03/main-qimg-f406db5658b5d0dade4d70a989560439.png" />
               </div>
            </Col>
            </Row>
                <hr />
            <div className="contactWrapper">
            <Row>
                
                <Col size="md-6">
                    <h1 style={{ textAlign:"center", margin: "25px"}}>Feel free to contact!</h1>
                    <hr />
                <img style={{display:"inline-block", height:"150px", marginLeft:"300px"}}alt="htmlbadge" src={this.state.gif} />
                <br />
                <Button style={{marginLeft:"300px", marginTop:"100px"}}onClick={this.handleGif}variant="warning">Click Me</Button>
                </Col>
                <Col size="md-6">
                <div className="contactForm">
             <Form>
            <Form.Row>
                <Form.Group style={{ marginRight:"10px"}} controlId="formGridFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>

                <Form.Group  controlId="formGridLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control style={{width:"400px"}} placeholder="Enter subject" />
            </Form.Group>

            <Form.Group controlId="formGridSubjectDetails">
                <Form.Label>Subject Details</Form.Label>
                <br />
                <textarea rows="5" cols="70"></textarea> 
            </Form.Group>


            <Button variant="danger" type="submit">
                Send
            </Button>
            </Form>
                </div>

                </Col>
            </Row>
            </div>
            </Container>
        )
    }
}
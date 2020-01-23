import React from "react";
import { Col, Row, Container } from "../components/Grid/index";
import { Form, Button} from "react-bootstrap";
import axios from "axios"
import "./AboutPage.css";



export default class AboutPage extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
           gif: "",
           firstname: "",
           lastname: "",
           subject: "",
           message: ""

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
            <div className="profileStuff">
            <Row >
                <Col size="md-4">
                <div className="pictureWrapper">
    
                    <img style={{ display:"inline-block", margin:"45px",borderRadius:"300px", height:"325px", boxShadow: "0 3px 6px #999, 0 3px 6px #999"}}alt="baby koala" src="https://images.vexels.com/media/users/3/145908/preview2/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg" />

                    
                  
                </div>
                </Col>
                <Col size="md-8">
                <div className="AboutMe">
                <h1 style={{paddingLeft:"20px", fontFamily: "'VT323', monospace"}}>Welcome , here is a little about me </h1>
                <hr />
               
               <p style={{padding:"30px", fontSize:"x-large", fontFamily: "'VT323', monospace"}}>My name is Jonathan Diaz i am 19 years old,i am a UCF Coding bootcamp graduate .I currently reside in Kissimmee, Florida. I am a young motivated individual who wants to strive in everything he does. I would describe myself as being a proactive ,dynamic and a team player. I consider myself these things because during the coding bootcamp projects i made sure to get my part of the project completed as soon as i could so that we could revise and so we can help each other out. I love coming up with new ideas and seeing them come to life. I am always seeking to expand on my current knowledge base . Feel free to email me down below ! </p>
          
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
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://fuzati.com/wp-content/uploads/2016/12/CSS-Logo.png" />
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="http://pluspng.com/img-png/logo-javascript-png-html-code-allows-to-embed-javascript-logo-in-your-website-587.png" />
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png" />
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="http://www.logospng.com/images/68/image-logo-in-bootstrap-68447.png" />
               <img style={{display:"inline-block", height:"80px", margin:"30px"}}alt="htmlbadge" src="http://pluspng.com/img-png/mongodb-png-read-only-views-in-mongodb-3-4-413.png" />
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://pngimg.com/uploads/mysql/mysql_PNG1.png" />
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://miro.medium.com/max/480/1*To2H39eauxaeYxYMtV1afQ.png" />
               <img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="https://rishabh.io/recipes/img/004-express-js.png" />
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
             <Form onSubmit={this.handleSubmit}>
            <Form.Row>
                <Form.Group style={{ marginRight:"10px"}} controlId="formGridFirstName">
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

                </Col>
            </Row>
            </div>
            <footer style={{ marginBottom:"0px", width:"100%", height:"150px", backgroundColor:"black", color:"white",  boxShadow: "0 3px 6px #999, 0 3px 6px #999"}}>
                <Row>
                  <Col size="md-8">
                   <h6 style={{ marginLeft:"300px", marginTop:"30px"}}>Copyright @ 2019</h6>
                  </Col>
                  <Col size="md-4">
                    <ul style={{ listStyle:"none",}}>
                      <li><a href="https://github.com/Johndoe0914"><img style={{ display:"inline-block", height:"40px", color:"white", marginTop:"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/5/54/GitHub_Logo.png"  alt="poison ivy"/></a></li>
                      <li><a href="https://www.linkedin.com/in/jonathan-diaz-46a7ba15b/"><img style={{ display:"inline-block", height:"40px", color:"white"}} src="http://chittagongit.com/download/88343" alt="poison ivy"/></a></li>
                    </ul>
                  </Col>
                </Row>
              </footer>
            </Container>
        )
    }
}
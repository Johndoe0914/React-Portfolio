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
					<img style={{display:"inline-block", height:"65px", margin:"30px"}}alt="htmlbadge" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaUAAAB4CAMAAABl2x3ZAAAAt1BMVEUAAAD////5+fv9/f/z8/OXl5iEhIXt7e+4uLpCQkJ7e3vf3+Cenp75+fn8/Pw6Ojt0dHSnpIfCwsOtra7l5eZMTE28vL6RkZJUVFWfnYFlZWbKysuzs7OBgYKLi4wbGxzW1tYSEhJvb3A1NTWlpaVQUFBdXV1HR0hpaWolJSYhISHIyMlqaFYuLi8dHR7W1cuvrZTKyLrn5+G/vapCQTWXlX1+fGhZWE8yMSglJR6uq40XGB+gnYR+AjcZAAAPfklEQVR4nO2daWOjOBKGEZBgB2wntmPT8RF8xEcy6Z5jZ2a3d///71pABzqqBE6yi53o/dQtg6joQVJJKgnPw3T1jP7kdDYa3rRtgVO9onHbFjjV6oGQ27ZtcKpTj5C4bRucahQT0ifrtq1wsmkzJjkl32/bDieL9oSUlMi8bUucUD0QRsknSdu2OCFikApKPnlo2xonUDsiUXKYzlN7IuQ7TOeqvkbJJ7u2TXLSNSY6pSDYt22Uk6ohMSj5gRs2nZeuCEDJD9y86znpnoCUfPLStmVOlSKEkhvdnpGGBKPkk6e2jXOiWhOcUhC1bZ0T1dhCyXVNZ6JEh6RQ8t1i0zno1YCkUnKLTecg3XUwKJFR2yY6DUxIel0i3baN/PICqpJOKXAORMuCqpJOyS1itC2oKhmU3KCpXW0gSAYl38VRtipzrARScpPjrarfjJJbt21TCxASQCkYtm3qF9asKSWfDNq29esKhgRScgtNbWnZnJIftG3slxXS4IGU3Mi2LSGQ4Lrk/Id2hHh4MCW3gNGS5idRcquB7Qge0qKUOm3b+zWFQUJaPNfktSG0W0IoOS+vDaHdEkZp27bFX1HZiZSCrG2Lv6JQSFi/RNq2+CvqdEquY6LaD4fT60Lrw+HmmmoxYZovFoej5ebjy6K84XCobuZ5HF71q42443pKrmOimpEAKLWAiv4nS7BXOsbLvSj6l+tH+erbkykFs/9DCVyAnrACkssqL8UOFCE3qLk5vzGT7hudTsmtq5cqwxACrWhFhZLaHpKZFWoRancHrB7KKdUyERg9ZKXk3AeuzUMyC6XNeLPptNsdLJfTJItlBAGZrYybV4Pl1bjabxlvt9tkUtwnZTjhF2PLFo5SQyVi/7HSEzyuh2EFivjwmZBX/OZQJD1MKvACk6UXQym5TeuyRvzIhan+yzKW6gXsc8UBq0py4rzCtKApOCSc0vX/4G+9XKWc0pX525VfFTh49NYLRMk7iPrJAlUhZ7KO0uLD/9JL1quFkvc6qzBBm1Y6BKKUe978Jhqo+pa65CjJWtkoed6kwmQ0iSglb8i6tID2TK7Fe7fslDiIoshT7EeDEh9PsSbvLZRcuJeiGkoVJmA7BEbJG7PKRB3qt1DCzPmiqqPkib7JdPRQShNO6Xv5CEfpvaql9CyKzghnRCltea70EW+gBPSCX1m1lLxrtDLVUqJcLZ54H6PkfDxF9ZREL2NEjdRRYvGPlrrkKDVTA0rV+EcLlEMpsRkNNl7CF9RxSs4TV9SAksfLLpio6SglOnXEvULLnDhKyXakwK46V+qYJsntRr9gs0iSByPV0OMhmRea1pxf8LoUCyndbRyGUefm0XZ9ocF1MkqmqbEiauo5bWBFE0oj0cur6RilDatKbJJ28gZKmCmrdB6J6aopm8eN5cWVx4SddjS2fjdok0iHIoWde+y6/bZoCijyRXWLdTH5MBQHzEUjKee14RMdFStezCEpUxNKqWjy1KlqdO6hTBeFefNBlJ7TbVxGyZYZH4dSxGzGr+nKzWuEvp6p0QrPzFn44zrJevTXIrzgRjnbL8MiDr53QjXn8TYtrn1+GupBuzvDijFicRNKosnTOnWE0kGFZIt7QCiZoV770Uv11hXd3VT78+hl+rIwvOP9Huwp1erxFMtQPHOVLIQ/xEZ3effGcU+5OCpzUyjtQSvgL0o0oiTmEtSXgVHScl4XqYE8PYtCQikZcQ9a2R+NM9yy4smRntqDOgZ2dOxwnabpulOVpvJQ9QHekxnqDn2VaFDeFpct1yox7pF9ItbCTA6FFfPqUvD4mEaU+JqRdgJNR3G4S23WL0UiGctdhVGkdZTIUrdgKueR0K2F/V5PKoclGF8BFOWW/iBarOq830y66lrOpcf2MioPBPxQeqhFRVtf/zSsiMRbVJ20AGFqRIkv6WotEZ/jI+NCWTYeh3QtXpssxZ08jBIQvDRQc4mSsglfV81GWZHiq10uqU82DibYGkBexdXK8szhRXlgOD8UkQWDqoaEni4jWX0/pb9qZFixEQ2B5kmXGTehNLVT8gMuUczRVmpr8FAvjBJoxabiFFUdpNxBdcRDtzwp0zKZQgUsClPtxx6lvkh670QN0d8levlBSnliV86mk5dEKhFqRR+xwty/1YhSNa5VkqtlDUNBXnMrr+lESmigF684SkcvGjrFQeKfpSGqL8YO2jkoid4zv1ivHh1up3K8ATdDc9m6QNGz+qj9QQOYRh+xoiGlvZ1SUAVbBnLwkWhA0PgUpCpho5EtAKn8vmCZl5rKC1itHjFUaIVbyqR1iHwQoT6RH5qpreVQIpmSxpqRnnplBvD0JGfYgHESJc334t5D5q1KdQ/Xk7Ec7JWxSq4eyF9PCYupZV2sNlzlbZ6ayotSeeFZoZkz7vw90gqeU9Leetb0asVME9UiemT1Qxk1s3bQXOnkbZ7xFp1GKVOSuSeudLrdeRXsFfh0UHE8jRK6FxCmxHPXxpmsKBWXKQPKrJRoINWfOCVtuol3tMpcAfvsgFaQIZAt6+7ME5dEB65PQjSidGX1xI3IlWGFKaMpWJMHMtKnCyvBlHhJaON25ksrjQ17LJA197DUasYpaafu8O9AKHWeeetaYUCUcCt4ZdKb/JN8PM0EjFJusGi8aLXGvDy4wUOP9UIoZSClnUmJgYOOSuQ+iHrYBEKpy5KVPo8165l6KZvElCsjLwz8D9QzOW28pJUPSqlaOeStlzJfUkMJ3/yMUBo2pcSKDJo14D6z2tcglFY9nJKW+cwwgv8VkCObEtPoQo0oieFrCiVDsXpiGp1N/SH7LsCqhMcPnURpb/7BGU5JdJ1KUDxCibdjCiV+1hJ0pfJEixX8be5rfWwjSrESEyRkoeRxj5y5hYj/AFLCV4ZOojQwKfGVDihv3jEpiadQ4g6IOhajxa68eDYr+Hy69mmWRpQipcSFbJREuHjAr21ICfcd3k+pbykf3nEriadQ4k6B4mGlgGnsSRlkBV+L07zQJpQGcLdkpSTWpFgvA1cmqCqhS2Hvp0QslPhxB0riSZQy4GLaLalvN/g+qH/KWygJ50FLt1F61Nd3wUMfgKoEFqEw5H2U+IAAypvb9+Z+SUyjSy7kAHqejdIIfmATSmx5yTg5n+25gD9PIcqd/f8RcvNOq0ofRgkKW2CUGvl4MCUxXVm9aBSI9ifFSKaFRqbRZc71lMTuGX0cM7NR4h6H8Ku11VWYkv1AjvdS4m2SNtlaam5UBA+de0AoiQmMPvUWnkBIfAYWjGZjlPT51gaUZuA2JdsPhSJGqfqzgcVAsypZo27eS4m3J7C7U0r1XZB5PISS/CJmWUa9xshYeeezmtDieQeyogklUZWMArRS4pNK1WAe+NKFAcm+1+K9lPiQBhpQZlDB82kCfe0YoQSciwWEUvNMjTlxT/h4+jJwPSXerpkFaKN05BlLDzTO5zeXl1ArSs3fSWnFHwx0CWy8pA4neeXQSw2jVGzMk9TbQpFGwgqgCwatsO8FZIaiKGyUlpBfqLd5RlWqOdnmvZRExw0cDUudm0xNPJmS5z1TI8fjeIvNR3KSwGmNIWRFPaUnRsIHAptslNh+QHWMt9GiagINkmVAW+okShuAkjgx26hMbJpbK9g3UCq6lrHNUZXaRaNM2Wyi7lcISsgpnJseDSb2oXA+C6WusutCSAug/KGeC1J7YgpCqfGceOUsG5XJDFopdDqlfdFmmQdkgLcTI6CNOhZGOfDuA/GA730LJC8z3Dj9J8PnVce2KiX4IcDd76AkolbgNSq9inFKiPdg+NKr0ker/YjUNWYFbXaNMNsbMXcN9XMLComEcPnxMjY/28zWAQGPQwnoVCg12A0zewMlrchEeLAKhDo2hkPG/R2Eku5L86bMGqFeSER1qR0xrUpm1IdYrwsiY0C+YTvUzYpJ9SzmvfWX5wWFJBVT7uL9Kp941GDDM/vj9PaH+QTa3BcbY2rNcSqeLjdXtD8wfQrez2u9Nh9TaDdUkZajnf3wl3vQCvpeAZ2zmCHIi3qpdGZPHeqDER/bPSmOx9F8hGVU/hAERoRqoWPlQYR3UiRLg8PWePujXbpiydoE1gwoB0/+5MZI/L3LPgxpxy/VXmGxi0TNW/maR6/fC7NhZ367hvZziGkKMlmpt5uQHjLZGSZ+NlofnnIdpp2IMgrIDG7tnm9f5IrgD5frNL9zt5xHpesWkAzZbbKvgkO/hY0h7R+2VfDEy43I+7hbiOYjS4SL9rrMoKsLSRMEk0PXW90vacbay5gmQ3nmMessaebLTix5qv3ZVup6Caxe1DHmpKQI505uhbe/pVZoLcomi0LdFZZ2wNIOiczAok7C0NfuDZQ7AxLhu/kEph/ffueQbDPhhYx9G/3yzU/7fSj5VZ/Z7clv6EH+lUd+R3oTZc5nlZNr90ay5L1DU5VMsd5372TLe8yksW7FEJiQ1oo9GhluAZVO17hzbN1xyTH9+PYbcwUz2+WFzBX58hYz0K+skw9GstqaGfveIrO/NymVDvKTkSyPseCvH1IZYygjfB7YF+erkd1SIZdBqj4+dKYTUUZsuLhzvK07N+2eYvrj7mfQDFL+/udeR8hV3FzWDj7+ytPY21i2GPdEuri8XOsiX7fSJpreBJryiImcSU+QzutrGCqZy3c9WI6ZM175zVSyIuwA5f0YlRslIkDj2egqhfdQUd3E8/l8OGaS74zzO23H8nJ1yzL99e7b7wE+otY0qHznzWDQpf15tzvIVXSdq+JfXdqJrvJk+WmDrjnOPK5HnUJXSHuxyfOr5pfzHNkTB121aLraJDT2QTAkKOZ2Wxgxv0K3jLap1/yd693d3f3M28dPdU7KQ/H+zbalOsNQ6SChZa0z14z8/i3H9Ef0qT59WvSf8snCqzSpBoh105TnqOS3u6Iy/aNtOz5Q3wuXw4z05RXK3PFyASqq0t2fbVvxgSrnNYDZIT4w0KMZLkJ/FVXp77at+DiV/j/4UcP0gin9/TOn9M+2rfgw0UHad/A3Ovi6yLPs/5VTuvt321Z8mEoQGfwbHZTDZzmcuVY5pG9tG/FhoiCQ6Ug6J3GZX8L58zNRim2UthfbLX1KSoizXf54oScG//X5KMEB1OXewdp19jPVLz8/EaWJZeRaLkhe6hzLp6LE13Uz86fFBbd3n4ySWJCK9UCk0UVD+mSUNmJWVZnJ212y51Doc1GSQ/nj5Dp9fT3eTNnxe5faJxV6/OU/d23b8JHCFgCztg17r+pPKr4kpdB+x/CSK9Ln1JV+CugQWbB3alXpiIdrhkqs3pnrv54A1iuo4bFcAAAAAElFTkSuQmCC" />
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
								
								<a  href="http://github.com/johndoe0914"><img style={{display:"inline-block", width:"55px", height:"55px", margin:"30px"}}alt="htmlbadge" src="data:image/png;base64,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" /></a>
								
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
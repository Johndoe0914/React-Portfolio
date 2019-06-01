import React from "react";
import { Col , Row, Container } from "../components/Grid/index";
import htmlJs from "../htmlJavascript.json";
import nodeJS from "../nodeJS.json";
import reactJS from "../reactJS.json";
import ProjectCarousel from "../components/carousel/index";
import "./PortfolioPage.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap"




export default class Portfolio extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            htmlJs: htmlJs,
            htmlVisible: false,
            javascriptVisible: false,
            handlebarsVisible: false,
            reactVisible : false,
            nodeVisible: false

        }
    }
    componentDidMount(){
        document.querySelector("nav")
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
    
    render() {
        return (
          <Container fluid>
              <div style={{marginTop:"100px", padding:"20px", }} className="buttons">
                <Row>
                    <Col size="md-12">
                    <center style={{ fontFamily: "'VT323', monospace"}}> <Button onClick={this.handleHtml}variant="outline-warning">HTML/Javascript</Button>     <Button onClick={this.handleNode} variant="outline-dark">Node</Button>   <Button onClick={this.handleReact} variant="outline-danger">React</Button> </center>
                        <br />
                                   <center style={{ color:"white", fontFamily: "'VT323', monospace"}}> {this.state.htmlVisible ? <h2>Html and javascript Projects</h2> : null}
                        
                                    {this.state.handlebarsVisible ? <h2>Handlebars projects</h2> : null}
                                    {this.state.reactVisible ? <h2>React Projects</h2> : null}
                                    {this.state.nodeVisible ? <h2>Node Projects</h2> : null}</center>

                    </Col>
                </Row>
              </div>


              <div style={{position:"relative", margin:"auto", marginTop:"100px",marginBottom:"200px",width:"900px",  boxShadow:" 0 3px 6px black, 0 3px 6px black" }}className="projectDisplay">
                  <Row>
                      <Col size="md-12">
                         {this.state.htmlVisible ?   <ProjectCarousel projects={htmlJs} />: null} 
                        {this.state.nodeVisible ? <ProjectCarousel projects={nodeJS} /> : null}
                        {this.state.reactVisible ? <ProjectCarousel projects={reactJS} /> : null}
                          
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
                      <li><a href="https://github.com/Johndoe0914"><img style={{ display:"inline-block", height:"40px", color:"white", marginTop:"30px"}} src="https://upload.wikimedia.org/wikipedia/commons/5/54/GitHub_Logo.png" /></a></li>
                      <li><a href="https://www.linkedin.com/in/jonathan-diaz-46a7ba15b/"><img style={{ display:"inline-block", height:"40px", color:"white", marginBottom:"20px"}} src="http://chittagongit.com/download/88343" /></a></li>
                    </ul>
                  </Col>
                </Row>
              </footer>
          </Container>
        )
    }
}
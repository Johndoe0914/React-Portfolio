import React from "react";
import { Col , Row, Container } from "../components/Grid/index";
import { Button } from "react-bootstrap"



export default class Portfolio extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }
    componentDidMount(){
        document.querySelector("nav")
   }

    render() {
        return (
          <Container fluid>
              <div style={{marginTop:"100px", backgroundColor:"white", padding:"20px"}} className="buttons">
                <Row>
                    <Col size="md-12">
                    <center> <Button onClick={this.handleHTML}variant="outline-warning">HTML</Button> <Button onClick={this.handleJavascript} variant="outline-info">Javascript</Button> <Button onClick={this.handleHandlebars} variant="outline-success">Handlebars</Button> <Button onClick={this.handleReact} variant="outline-danger">React</Button> </center>
                        <br />
                                    {this.state.htmlVisible ? <h2>Html Projects</h2> : null}
                                    {this.state.javascriptVisible ? <h2>Javascript Projects</h2> : null}
                                    {this.state.handlbarsVisble ? <h2>Handlebars projects</h2> : null}
                                    {this.state.reactVisible ? <h2>React Projects</h2> : null}

                    </Col>
                </Row>
              </div>


              <div style={{position:"relative", margin:"auto", marginTop:"100px", height:"500px", width:"700px", backgroundColor:"darkBlue",  boxShadow: "0 3px 6px #999, 0 3px 6px #999", }}className="projectDisplay">
                  <Row>
                      <Col size="md-12">

                      </Col>
                  </Row>
              </div>
          </Container>
        )
    }
}
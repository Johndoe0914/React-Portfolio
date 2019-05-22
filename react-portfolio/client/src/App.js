import React from 'react';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/NavBar";
import About from "./pages/AboutPage";
import Portfolio from "./pages/PortfolioPage";
//import NoMatch from "./pages/NoMatch";
import './App.css';

class App extends React.Component() {
  constructor(props){
    super(props)

    this.state = {}
    this.connecToServer = this.connecToServer.bind(this);
  }

  connecToServer() {
    fetch('/');
  }

  componentDidMount() {
    this.connecToServer();
  }
  render(){
  return (
  <Router>
    <Switch>
    <Route exact path ="/" component={LandingPage} />
    </Switch>
    <Navbar />
    <Switch>
     
    
    <Route exact path ="/about" component={About} />
    <Route exact path = "/portfolio" component={Portfolio} />
    {/* <Route exact path = "/contact" component={Contact} />
    <Route component={NoMatch} />  */}
    </Switch>
   

  </Router>
  )};
}

export default App;

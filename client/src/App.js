import React from 'react';
import { BrowserRouter as Router , Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
// import NoMatch from "./pages/NoMatch";
import './App.css';

export default class App extends React.Component{
  render(){
    return (
    <Router>
      {/* <Navbar /> */}
      <Switch>
      
      <Route exact path ="/" component={LandingPage} />
      {/* <Route component={NoMatch} />  */} */}
      </Switch>
     
  
    </Router>
    )};

}

  


  
  




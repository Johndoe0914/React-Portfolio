import React from "react";

import "./style.css";


// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
   <div className="">
      <nav className="navbar sticky-top navbar-black bg-black  navbar-expand-lg">
 
 {/* <div className="scrollspy">
 <a className="navbar-brand" href="#">About</a>
  <a className="navbar-brand" href="#">Portfolio</a>
  <a className="navbar-brand" href="#">Resume</a>
 </div> */}
 
</nav>
   </div>
    // <nav  className="navbar navbar-expand-lg navbar-dark bg-black" style={{ fontFamily: "'VT323', monospace"}}>
    //   <Link className="navbar-brand" to="/">
    //     {/* <h3 style={{ paddingLeft:"100px"}}>Jonathan Diaz</h3> */}
    //   </Link>
    //   <div>
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         <Link
    //           to="/about"
    //           className={
    //              window.location.pathname === "/about"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           About
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           to="/portfolio"
    //           className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
    //         >
    //           Portfolio
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link
    //           to="/resume"
    //           className={
    //              window.location.pathname === "/resume"
    //               ? "nav-link active"
    //               : "nav-link"
    //           }
    //         >
    //           Resume
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
}

export default Navbar;

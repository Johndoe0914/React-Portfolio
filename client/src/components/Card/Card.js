import React, {Link} from 'react'
import "./Card.css";

const Card = ({name, image, description, gitUrl, siteUrl}) => {
  return (
       
        <div className="projectCard" onClick={() => window.location.assign(siteUrl)}>
        <div style={{backgroundImage: `url(${image})`}} className="projectImage"></div>
<div className="proejecName">{name}</div>
<div className="projectDescription">{description}</div>
        <a href={gitUrl}>Github</a>
    </div>
  
  )

}

export default Card
import React from "react";
import Card from "../Card/Card";


const CardList = ({projects}) => {
    return (

         (projects.map(project => (
            <Card name={project.projectName} image={project.projectImage} description={project.projectDescription} gitUrl={project.projectGitUrl} siteUrl={project.projectUrl}  />
         )))
     
    )
}

export default CardList
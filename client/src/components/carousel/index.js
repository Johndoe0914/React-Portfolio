import React from 'react';
import Carousel from "react-bootstrap/Carousel";
import { Row, Container} from "../Grid/index";
import Swiper from 'react-id-swiper';
// Need to add Pagination, Navigation modules
import { Pagination, Navigation } from 'swiper/dist/js/swiper.esm';
import "./style.css";



const params = {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: '3',
 
  pagination: {
    el: '.swiper-pagination'
  },
  renderPrevButton: () => <div className="swiper-button-prev" style={{backgroundImage:`url("https://img.icons8.com/plasticine/100/000000/chevron-left.png")`}}></div>,
  renderNextButton: () => <div className="swiper-button-next" style={{backgroundImage:`url("https://img.icons8.com/plasticine/100/000000/chevron-right.png")`}}></div>,
};

export default class ProfileCarousel extends React.Component {
    constructor(props){
      super(props)

      this.state = {

      }
    }
    componentDidMount() {
      
    }

    render() {
      let id = 0;
      return (
          <Row>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.css"></link>
            <div className="profileImageShowCase">
              <Swiper {...params}>
                 {this.props.projects.map(project => (
                    <div className="card1">
                    <div className="img-container">
                        <div className="img-div">
                            <img src={project.projectImage} />
                        </div>
                    </div>
                    <div className="content">
                  <ul>
                    <li>
                      <strong>Project name : </strong> {project.projectName}
                    </li>
                    <li>
                      <strong>Description: </strong> {project.projectDescription}
                    </li>
                    <li>
                      <strong>Github repo</strong> <a href={project.projectGitUrl}>{project.projectName}</a>
                    </li>
                    <li>
                     
                      <a className="btn btn-danger" href={project.projectUrl}>
                        View Project
                      </a>
                    </li>
                  </ul>
                </div>
                </div>
            )
                )} 
                
              </Swiper>
          </div>
          </Row>
      )
    }
}



// return (
//     <div className="card">
//         <div className="img-container">
//             <div className="img-div"  style={{backgroundImage:`url('${project.projectImage}')`}}></div>
//         </div>
//         <div className="content">
//       <ul>
//         <li>
//           <strong>Project name : </strong> {project.projectName}
//         </li>
//         <li>
//           <strong>Description: </strong> {project.projectDescription}
//         </li>
//         <li>
//           <strong>Github repo</strong> <a href={project.projectGitUrl}>{project.projectName}</a>
//         </li>
//         <li>
         
//           <a className="btn btn-danger" href={project.projectUrl}>
//             View Project
//           </a>
//         </li>
//       </ul>
//     </div>
//     </div>
// )
import "./style.css"
import { NavLink } from "react-router-dom";

function Projects({title,img,index,p1}) {
    return(

    <NavLink to={`/projects/${index}`}>
        <li className="project">
       
            <img src= {img} alt={title} className="project__img"/>

            <h3 className="project__title">{title}</h3>
            <div className="project__p">
            <p1 >{p1}</p1>
            
            </div>
            
        </li>
    </NavLink>

    );
}
export default Projects;
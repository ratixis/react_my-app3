import Download from "../components/download/Download";
import { useParams } from "react-router-dom";
import {  project } from "../helpers/projectList";

function Projects (title) {

const {id} = useParams();
const projects = project[id];



    return (
        <main className="section">
        <div className="container">
            <div className="project-details">

                <h1 className="title-1">{projects.title}</h1>

               

                <h1 className="title-2">{projects.p1}</h1>
                <h1 className="title-2">{projects.p2}</h1>

                <div className="">
                {projects.src}
                </div>
                
                <Download link="..."/>

            </div>
            </div>
    </main>
    );
}
export default Projects 
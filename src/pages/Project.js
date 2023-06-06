
import Projects from "../components/project/Projects";

import {project} from "../helpers/projectList";

const Project = () => {
    return(
        <main className="section">
        <div className="container">
                <h3 className="title-1">Материалы</h3>
                <p className="title-4">Модули позволяют просматривать и скачивать файлы на территории Республики Саха (Якутия) 2002 - 2021гг.</p>
            <ul className="projects">
            {project.map ((project) => {
                return <Projects  title={project.title} p1={project.p1} img={project.img} index={project.key} src={project.src} />;

            } ) }
           

            </ul>
        </div>
    </main>
    );
}
export default Project;
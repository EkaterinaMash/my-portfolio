import {projects} from '../../projects';
import Project from "../project/Project";
import './Projects.css'

function Projects() {
    return (
        <>
            <section className="projectsSection">
                <h2 className="projectsHeading">My projects</h2>
                <ul className="projects">
                    {projects.map(project => (
                        <li
                            className="project"
                            key={project.id}>
                            <Project
                                project={project}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Projects;

import './App.css';
import {projects} from "./projects";
import Project from "./components/project/Project";
import Header from "./components/header/Header";

function App() {

    return (
        <div className="App">
            <Header/>
            <section className="projectsSection">
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
        </div>
    );
}

export default App;

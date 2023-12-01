import './App.css';
import {projects} from "./projects";
import Project from "./components/Project";

function App() {

    return (
        <div className="App">
            <section className="projectsSection">
                <ul className="projects">
                    {projects.map(project => (
                        <li key={project.id}>
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

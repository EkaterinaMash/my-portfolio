import './App.css';
import {projects} from "./projects";
import Project from "./components/Project";

function App() {

    return (
        <div className="App">
            <ul>
                {projects.map(project => (
                    <li key={project.id}>
                        <Project
                            project={project}
                            />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;

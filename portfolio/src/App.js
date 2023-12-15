import './App.css';
import Projects from "./components/projects/Projects";
import Header from "./components/header/Header";
import Home from './components/home/Home';
import About from './components/about/About';

function App() {

    return (
        <div className="App">
            <Header/>
            <Home/>
            <About/>
            <Projects/>
        </div>
    );
}

export default App;

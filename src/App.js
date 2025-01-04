
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Project1 from './Components/Project1';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <div id="home">
          <Home />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="project">
          <Project1 />
        </div>
      </div>
    </>
  );
}

export default App;


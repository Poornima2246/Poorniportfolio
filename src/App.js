 import './App.css';
 import { BrowserRouter } from 'react-router-dom';
import  Nav from  './Components/Navbar.jsx';
import Home from './Components/Home.jsx';
import Skills from './Components/Skills.jsx';
import Project from './Components/Project.jsx';
import Project1 from './Components/Project1.jsx';
// import React , {useEffect, useRef} from 'react';
// import { inView , useAnimation } from 'framer-motion';


function App() {
//     const ref = useRef(null);
//     const isInview = inView(ref, {once:true});
//    const  transistion = useAnimation();
//    useEffect(() => {
//     if (isInview) {
//         transistion.start("visible");
//     }
// }, [isInview, transistion]);


  return (
  <BrowserRouter>
  {/* <div ref={ref}> */}
  <Nav/>
  <Home/>
  <Skills/>
 
  <Project1/>
  {/* </div> */}
  </BrowserRouter>
  );
}


export default App;
 
import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar"
import {Routes,Route} from "react-router-dom"
import About from "./Components/About";
import Contact from "./Components/Contact"
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Social from "./Components/Social";
import Cv from './Components/Cv';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route index element={<About/>}/>
        <Route exact path="/About" element={<About/>}/>
          <Route exact path="Cv" element={<Cv/>} />
        <Route exact path="Skills" element={<Skills/>}/>
        <Route exact path="Project" element={<Project/>}/>
        <Route exact path="Contact" element={<Contact/>}/>
      </Routes>
      <Social/>
    </div>
  );
}

export default App;

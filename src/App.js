import { Route,Routes } from "react-router-dom";
import React from "react";
import Home from "./routes/Home";
import Courses from "./routes/Courses";
import About from "./routes/About";
import Pricing from "./routes/Pricing";
import Journal from "./routes/Journal";
import Contact from "./routes/Contact";
import './index.css';

function App() {
  return (
    <>
        <Routes>
        <Route path= "/" element={<Home/>}/>
        <Route path= "/courses" element={<Courses/>}/>
        <Route path= "/about" element={<About/>}/>
        <Route path= "/pricing" element={<Pricing/>}/>
        <Route path= "/journal" element={<Journal/>}/>
        <Route path= "/contact" element={<Contact/>}/>
        </Routes>
    </> 
  );
}

export default App;

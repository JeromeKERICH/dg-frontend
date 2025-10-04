import React from "react";
import { Route, Routes, Router } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Wellness from "./pages/Wellness";
import FreshG from "./pages/FreshG";
import Retirees from "./pages/Retirees";
import Cooperates from "./pages/Cooperates";


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
     
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/wellness" element={<Wellness/>}/>
          <Route path="/freshgrad" element={<FreshG/>}/>
          <Route path="/retirees" element={<Retirees/>}/>
          <Route path="/corporates" element={<Cooperates/>}/>
    
          
        
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

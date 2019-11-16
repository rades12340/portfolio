import React from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SideDrawer from "./components/SideDrawer";
import UiState from "./context/UiState";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import CountUp from "./components/CountUp";
import Testimonials from "./components/Testimonials";
import FormDialog from "./components/FormDialog";
import Contact from "./components/Contact";
import { BrowserRouter as Router } from "react-router-dom";
import Clients from "./components/Clients";
import Footer from "./components/Footer";

function App() {
  return (
    <UiState>
      <Router>
        <div className="App">
          <Navbar />
          <Hero />
          <AboutMe />
          <SideDrawer />
          <Services />
          <CountUp />
          <Testimonials />
          <FormDialog />
          <Clients />
          <Contact />
          <Footer />
        </div>
      </Router>
    </UiState>
  );
}

export default App;

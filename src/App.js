import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SideDrawer from "./components/SideDrawer";
import UiState from "./context/UiState";

function App() {
  return (
    <UiState>
      <Router>
        <div className="App">
          <Navbar />
          <Hero />
          <SideDrawer />
        </div>
      </Router>
    </UiState>
  );
}

export default App;

import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/HomePage/HomePage";
import Nav from "./components/Nav/Nav";
import Sidebar from "./components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/ProjectsPage/ProjectsPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div id="app">
      <BrowserRouter>
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:category?" element={<ProjectsPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

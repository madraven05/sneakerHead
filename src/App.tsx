import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    { name: "About Us", link: "/about" },
  ];
  return (
    <>
      <Router>
        <Navbar navItems={navItems} />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Home/>}/>
          <Route path="/about" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import ProductOverview from "./pages/ProductOverview";

function App() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Shop", link: "/products" },
    { name: "About Us", link: "/about" },
    { name: "Subscribe", link: "/about" }
  ];
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<ProductOverview/>}/>
          <Route path="/about" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

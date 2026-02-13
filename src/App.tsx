import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Memories from "./pages/Memories";
import LoveLetter from "./pages/LoveLetter";
import Coupon from "./pages/Coupon";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div id="app-root">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/love-letter" element={<LoveLetter />} />
            <Route path="/coupon" element={<Coupon />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Memories from "./pages/Memories";
import LoveLetter from "./pages/LoveLetter";
import Coupon from "./pages/Coupon";
import LoveQuestions from "./pages/LoveQuestions";

const App: React.FC = () => {
  return (
    <BrowserRouter basename="/valentine-surprise">
      <div id="app-root">
        {/* <NavBar /> */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/love-letter" element={<LoveLetter />} />
            <Route path="/coupon" element={<Coupon />} />
            <Route path="/love-questions" element={<LoveQuestions />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import LaosRetreat from "./pages/LaosRetreat.jsx";
import Vientiane from "./pages/Vientiane.jsx";
import LuangPrabang from "./pages/LuangPrabang.jsx";
import VangVieng from "./pages/VangVieng.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/laos" element={<LaosRetreat />} />
        <Route path="/vientiane" element={<Vientiane />} />
        <Route path="/luang-prabang" element={<LuangPrabang />} />
        <Route path="/vang-vieng" element={<VangVieng />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

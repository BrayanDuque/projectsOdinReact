import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tarjeta from "./Tarjetas/Tarjetas";
import InfoCv from "./EditCv/InfoCv";
import Navbar from "./Navbar/Navbar";
import React from 'react'

export const Routers = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/Tarjeta" element={<Tarjeta />} />
        <Route path="/InfoCv" element={<InfoCv />} />
    </Routes>
    <Navbar />
    </BrowserRouter>
   
  )
}

export default Routers;

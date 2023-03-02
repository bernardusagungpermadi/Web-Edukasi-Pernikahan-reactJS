import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Edukasi from "./pages/Edukasi";
import Artikel from "./pages/Artikel";
import Layanan from "./pages/Layanan"

function App() {
 return <>
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element = {<Home/>}/>
        <Route path="edukasi" element ={<Edukasi/>}/>
        <Route path="artikel" element ={<Artikel/>}/>
        <Route path="layanan" element ={<Layanan/>}/>
      </Route>
    </Routes>
 </BrowserRouter>
 
 </>
}

export default App;

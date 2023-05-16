import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Edukasi from "./pages/Edukasi";
import Artikel from "./pages/Artikel";
import Layanan from "./pages/Layanan";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "../src/pages/Dashboard"
import Blog from "./pages/Blog";

import User from "./components/Dashboard-Admin/User";
import Overview from "./components/Dashboard-Admin/Overview";
import PostAdmin from "./components/Dashboard-Admin/PostAdmin";
import ArtikelAdmin from "./components/Dashboard-Admin/ArtikelAdmin";
import Setting from "./components/Dashboard-Admin/Setting";
import FormAddUser from "./components/Dashboard-Admin/FormAddUser";
import FormEditUser from "./components/Dashboard-Admin/FormEditUser";
import AddPost from "./components/Dashboard-Admin/AddPost";
import EditPost from "./components/Dashboard-Admin/EditPost";
import Content from "./components/Courses/Content";
import AddArtikel from "./components/Dashboard-Admin/AddArtikel";
import SidebarArtikel from "./components/Post-Artikel/ArtikelSidebar";
import ChatAhli from "./components/Fitur/ChatAhli";
import KalenderRekom from "./components/Fitur/KalenderRekom";
import WeddingPlans from "./components/Fitur/WeddingPlans";
import AlurPengaduan from "./components/Fitur/AlurPengaduan";

function App() {
 return <>
 <BrowserRouter>
    <Routes>
        
        <Route path="/" element={<Layout/>}>
          <Route index element ={<Home/>}/>
          <Route path="chatAhli" element ={<ChatAhli/>}/>
          <Route path="edukasi" element ={<Edukasi/>}/>
          <Route path='edukasi/content/:id' element={<Content/>}/>
          <Route path="artikel" element ={<Artikel/>}/>
          <Route path="artikel/blog/:id" element ={<Blog/>}/>
          <Route path="artikelSide" element ={<SidebarArtikel/>}/>
          <Route path="layanan" element ={<Layanan/>}/>

          <Route path="rekomendasiTanggal" element ={<KalenderRekom/>}/>
          <Route path="weddingPlans" element ={<WeddingPlans/>}/>
          <Route path="alurPengaduan" element ={<AlurPengaduan/>}/>
        </Route>

        <Route path="login" element ={<Login/>}/>
        <Route path="register" element ={<Register/>}/>
  

        <Route path="dashboard" element ={<Dashboard/>}>
          <Route path='overview' element={<Overview/>}/>  
          <Route path="user" element={<User/>}/>
          <Route path='user/add' element={<FormAddUser/>}/>
          <Route path='user/edit/:id' element={<FormEditUser/>}/>
          <Route path='postAdmin' element={<PostAdmin/>}/>
          <Route path='postAdmin/addPost' element={<AddPost/>}/>
          <Route path='postAdmin/editPost/:id' element={<EditPost/>}/>
          <Route path='artikelAdmin' element={<ArtikelAdmin/>}/>
          <Route path='artikelAdmin/addArtikel' element={<AddArtikel/>}/>
          <Route path='setting' element={<Setting/>}/>
          
          </Route>

    </Routes>
        
 </BrowserRouter>
 
 </>
}

export default App;

import React, { Component } from "react";
import Top from "./Component/Top";
import Footer from "./Component/Footer";
import "./App.css"; 
import Home from "./Component/Home";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Terms from "./Component/Terms";
import Register from "./Component/Register";
import Login from "./Component/Login";
import Profile from "./Component/Profile";
import Profiles from "./Component/Profiles";
import ShowStore from "./Component/ShowStore";
import AddStore from "./Component/AddStore";
import Admin from "./Component/Admin";
import Google from "./Component/Google";





class App extends Component {
  render(){
  return (
    
    <div>
<Top></Top>
<Router>
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>
    <Route path="/about" element={<About></About>}></Route>
    <Route path="/contact" element={<Contact></Contact>}></Route>
    <Route path="/login" element={<Login></Login>}></Route>
    <Route path="/register" element={<Register></Register>}></Route>
    <Route path="/profile" element={<Profile></Profile>}></Route>
    <Route path="/profiles" element={<Profiles></Profiles>}></Route>
    <Route path="/terms" element={<Terms></Terms>}></Route>
    <Route path="/show" element={<ShowStore></ShowStore>}></Route>
    <Route path="/add" element={<AddStore></AddStore>}></Route>
    <Route path="/admin" element={<Admin></Admin>}></Route>
    <Route path="/loggoogle" element={<Google></Google>}></Route>
  </Routes>
</Router>
<Footer></Footer>
</div>
  );
}

}

export default App;

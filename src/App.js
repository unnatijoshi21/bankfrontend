import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer.js";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs.js";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import UserRegistration from "./components/pages/UserRegistration.js";
import UserProfile from "./components/pages/UserProfile.js";
import BankStatement from "./components/pages/BankStatement.js";
import Credit from "./components/pages/Credit.js";
import Debit from "./components/pages/Debit.js";
import Fraud from "./components/pages/Fraud.js";

function App() 
{
    return (
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/userregistration" element={<UserRegistration />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/bankstatement" element={<BankStatement />} />
          <Route path="/credit" element={<Credit />} />
          <Route path="/debit" element={<Debit />} />
          <Route path="/fraud" element={<Fraud />} />
          
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer/>
      </Router> 
           
           );
}                             
                                    
export default App;
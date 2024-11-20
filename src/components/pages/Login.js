import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
      const [formData, setFormData] = useState({ username: "", password: "" });

    const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => 
    {
    e.preventDefault();
    try {
    const response = await axios.post("http://localhost:8080/api/login", formData);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("username",formData.username)
    alert("Login successful!");
    window.location.href = "/dashboard";
    } 
    
    catch (err) {
        alert("Login failed");
    }
    };

    return (
        <form onSubmit={handleSubmit}>
        <input name="username" placeholder="Username" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
        </form>
        );
};

export default Login;

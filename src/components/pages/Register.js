import React, { useState } from "react";
import axios from "axios";

const Register = () => 
{
    const [formData, setFormData] = useState({ username: "", password: "" });

        const handleChange = (e) => 
            {
                setFormData({ ...formData, [e.target.name]: e.target.value });
            };

        const handleSubmit = async (e) => 
            {
                e.preventDefault();
                                try 
                                {
                                    const response = await axios.post("http://localhost:8080/api/register", formData);
                                    alert("Registration successful!");
                                } 
                                catch (err) 
                                {
                                    alert("Error during registration");
                                }
            };

        return (
            <form onSubmit={handleSubmit}>
                <input name="username" placeholder="Username" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
                );
};

export default Register;
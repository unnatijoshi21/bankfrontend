import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserRegistration = () => {
  const [userData, setUserData] = useState({
    name: "",
    address: "",
    age: "",
    gender: "",
    accountType: "current",
    balance: 0
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Store data in localStorage or state management
    localStorage.setItem("userData", JSON.stringify(userData));
    navigate("/userprofile"); // Redirect to UserProfile page
  };

  return (
    <div style={containerStyle}>
      <h2>User Registration</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={userData.age}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </label>
        <label>
          Gender:
          <select
            name="gender"
            value={userData.gender}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Account Type:
          <select
            name="accountType"
            value={userData.accountType}
            onChange={handleChange}
            required
            style={inputStyle}
          >
            <option value="current">Current Account</option>
            <option value="savings">Savings Account</option>
          </select>
        </label>
        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
};

const containerStyle = {
  padding: "20px",
  maxWidth: "600px",
  margin: "0 auto",
  textAlign: "center",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const inputStyle = {
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  fontSize: "16px",
};

const buttonStyle = {
  padding: "10px",
  backgroundColor: "#2c3e50",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
};

export default UserRegistration;
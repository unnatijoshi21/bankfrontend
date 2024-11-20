import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#2c3e50",
    color: "#fff",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
  };

  const leftSectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "0",
  };

  const taglineStyle = {
    fontSize: "14px",
    fontStyle: "italic",
    margin: "0",
  };

  const linksStyle = {
    display: "flex",
    gap: "15px",
  };

  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "bold",
  };

  return (
    <nav style={navBarStyle}>
      <div style={leftSectionStyle}>
        <h1 style={titleStyle}>Deloitted Bank</h1>
        <p style={taglineStyle}>Innovating your financial future</p>
      </div>
      <div style={linksStyle}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/register" style={linkStyle}>
          Register
        </Link>
        <Link to="/login" style={linkStyle}>
          Login
        </Link>
        <Link to="/about" style={linkStyle}>
          About Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    textAlign: "center",
    color: "#333",
  };

  const bannerStyle = {
    backgroundColor: "#016064",
    color: "#fff",
    padding: "50px 20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  };

  const sectionStyle = {
    marginBottom: "30px",
    textAlign: "left",
    maxWidth: "800px",
    margin: "0 auto",
  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  };

  const buttonStyle = {
    backgroundColor: "#2c3e50",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontSize: "16px",
    borderRadius: "5px",
    cursor: "pointer",
    textTransform: "uppercase",
    fontWeight: "bold",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#1abc9c",
  };

  return (
    <div style={containerStyle}>
      <div style={bannerStyle}>
        <h1>Welcome to Deloitted Bank</h1>
        <p>Your trusted partner in financial solutions.</p>
      </div>
      <div style={sectionStyle}>
        <h2>Real-Time Transaction Processing</h2>
        <p>
          Experience lightning-fast, secure, and reliable transaction
          processing with our state-of-the-art system. Handle high volumes with
          ease and confidence.
        </p>
      </div>
      <div style={buttonContainerStyle}>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1abc9c")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2c3e50")}
          onClick={() => navigate("/register")}
        >
          Register
        </button>
        <button
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#1abc9c")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#2c3e50")}
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;

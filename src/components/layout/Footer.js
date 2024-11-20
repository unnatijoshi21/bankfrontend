import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#2c3e50",
    color: "#fff",
    textAlign: "center",
    padding: "10px 0",
    fontSize: "14px",
    position: "relative",
    bottom: "0",
    width: "100%",
    boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
  };

  const linkStyle = {
    color: "#1abc9c",
    textDecoration: "none",
    margin: "0 5px",
  };

  return (
    <footer style={footerStyle}>
      <p>
        © 2024 Deloitted Bank | Contact us:{" "}
        <a href="mailto:support@deloittedbank.com" style={linkStyle}>
          support@deloittedbank.com
        </a>{" "}
        | Call: <a href="tel:+91 9234567890" style={linkStyle}>+91 9234567890</a>
      </p>
      
    </footer>
  );
};

export default Footer;

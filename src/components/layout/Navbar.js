import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
      return (
            <nav style={styles.navbar}>
            <h1 style={styles.brand}>ABCD Bank</h1>      <div style={styles.links}>
            <Link to="/register" style={styles.link}>Register</Link>        <Link to="/login" style={styles.link}>Login</Link>      </div>
            </nav>  );
    };

const styles = {
    navbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#0044cc",
        padding: "10px 20px",
        color: "white",
           },

    brand: {
        fontSize: "1.5em",
        fontWeight: "bold",
          },
    
    links: {
        display: "flex",
        gap: "15px",
        },
    link: {
        color: "white",
        textDecoration: "none",
        fontSize: "1em",
        fontWeight: "bold",
        },
};

export default Navbar;
import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
      const username = localStorage.getItem("username"); // Assuming the username is stored in localStorage upon login

        return (
            <div style={styles.container}>
            <h1>Welcome to Your Dashboard, {username || "User"}!</h1>
            <p>Your trusted banking partner for financial growth and security.</p>

            <div style={styles.linksContainer}>
            <Link to="/transactions" style={styles.link}>
            <button style={styles.button}>Manage Transactions</button>        </Link>
            <Link to="/fraud-detection" style={styles.link}>
            <button style={styles.button}>Fraud Detection</button>        </Link>        <Link to="/profile" style={styles.link}>
            <button style={styles.button}>Profile Management</button>        </Link>      </div>
            </div>  );
            } 

            const styles = {
                container: {
                    textAlign: "center",
                    marginTop: "50px",
                    fontFamily: "Arial, sans-serif",
                    },

                linksContainer: {
                    display: "flex",
                    justifyContent: "center",
                    gap: "20px",
                    marginTop: "30px",
                    },
                
                link: {
                    textDecoration: "none",
                },
                
                button: {
                    padding: "10px 20px",
                    backgroundColor: "#0044cc",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "1em",
                    fontWeight: "bold",
                    },
};

export default Dashboard;
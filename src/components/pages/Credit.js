import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Credit = () => {
  const [userData, setUserData] = useState(null);
  const [amount, setAmount] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get data from localStorage or state management
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: check if the entered amount is a positive number
    if (isNaN(amount) || amount <= 0) {
      setError("Please enter a valid amount greater than 0.");
      return;
    }

    // Update the balance
    const updatedBalance = parseFloat(userData.balance) + parseFloat(amount);

    // Update user data in localStorage
    const updatedUserData = {
      ...userData,
      balance: updatedBalance.toFixed(2), // Store the balance with two decimal places
    };
    localStorage.setItem("userData", JSON.stringify(updatedUserData));

    // Update the state with the new data
    setUserData(updatedUserData);

    // Clear error and amount after successful submission
    setError(null);
    setAmount("");

    alert(`Amount of ${amount} credited successfully. New balance: ${updatedBalance.toFixed(2)}`);
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div style={containerStyle}>
      <h2>Credit Money</h2>
      <p>Current Balance: {userData.balance}</p>
      
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label>Amount to Credit:</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="1"
            step="any"
            style={inputStyle}
          />
        </div>

        {error && <p style={errorStyle}>{error}</p>}

        <button type="submit" style={buttonStyle}>Credit</button>
      </form>

      <div style={buttonContainerStyle}>
        <button onClick={() => navigate("/userprofile")} style={buttonStyle}>Back to Profile</button>
        <button onClick={() => navigate("/bankstatement")} style={buttonStyle}>View Bank Statement</button>
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  padding: "20px",
  maxWidth: "600px",
  margin: "0 auto",
  textAlign: "center",
};

const formStyle = {
  marginTop: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const inputGroupStyle = {
  marginBottom: "15px",
};

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "5px",
  border: "1px solid #ddd",
  width: "100%",
  maxWidth: "300px",
};

const buttonStyle = {
  padding: "10px 20px",
  backgroundColor: "#2c3e50",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "10px 0",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  marginTop: "20px",
};

const errorStyle = {
  color: "red",
  fontSize: "14px",
  marginBottom: "10px",
};

export default Credit;
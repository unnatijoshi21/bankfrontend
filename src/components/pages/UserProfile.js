import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const [accountNumber] = useState(generateAccountNumber());
  const navigate = useNavigate();

  useEffect(() => {
    // Get data from localStorage or state management
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);

  // Random account number generator (example: 10 digit number)
  function generateAccountNumber() {
    return Math.floor(Math.random() * 9000000000 + 1000000000).toString();
  }

  // Redirect to specified pages
  const handleRedirect = (page) => {
    navigate(`/${page}`);
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div style={containerStyle}>
      <h2>User Profile</h2>
      <div style={profileStyle}>
        <p><strong>Name:</strong> {userData.name}</p>
        <p><strong>Address:</strong> {userData.address}</p>
        <p><strong>Age:</strong> {userData.age}</p>
        <p><strong>Gender:</strong> {userData.gender}</p>
        <p><strong>Account Type:</strong> {userData.accountType}</p>
        <p><strong>Bank Account Number:</strong> {accountNumber}</p>
        <p><strong>Balance:</strong> {userData.balance}</p>
      </div>

      <div style={buttonContainerStyle}>
        <button onClick={() => handleRedirect("/bankstatement")} style={buttonStyle}>Bank Statement</button>
        <button onClick={() => handleRedirect("credit")} style={buttonStyle}>Credit Money</button>
        <button onClick={() => handleRedirect("debit")} style={buttonStyle}>Debit Money</button>
        <button onClick={() => handleRedirect("fraud")} style={buttonStyle}>Fraud/Dispute</button>
      </div>
    </div>
  );
};

const containerStyle = {
  padding: "20px",
  maxWidth: "600px",
  margin: "0 auto",
  textAlign: "center",
};

const profileStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  fontSize: "18px",
  marginBottom: "20px",
};

const buttonContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
  marginTop: "20px",
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
  flex: 1,
};

export default UserProfile;

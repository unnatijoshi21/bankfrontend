import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Fraud = () => {
  const [userData, setUserData] = useState(null);
  const [fraudType, setFraudType] = useState("");
  const [description, setDescription] = useState("");
  const [incidentDate, setIncidentDate] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
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

    // Validation: check if all fields are filled
    if (!fraudType || !description || !incidentDate) {
      setError("Please fill in all fields.");
      return;
    }

    // Create a complaint object
    const complaint = {
      user: userData.name,
      accountNumber: userData.accountNumber,
      fraudType,
      description,
      incidentDate,
      status: "Under Review",
    };

    // Save the complaint to localStorage (or a database if applicable)
    const complaints = JSON.parse(localStorage.getItem("complaints")) || [];
    complaints.push(complaint);
    localStorage.setItem("complaints", JSON.stringify(complaints));

    // Clear the form
    setFraudType("");
    setDescription("");
    setIncidentDate("");
    setError(null);
    setSuccessMessage("Your fraud complaint has been filed successfully. We'll review it soon.");

    // Optionally, you can navigate the user to the profile or another page after successful submission
    // setTimeout(() => navigate("/userprofile"), 3000); // Uncomment this line to navigate after a few seconds
  };

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div style={containerStyle}>
      <h2>File a Fraud Complaint</h2>
      <p>Your current account: {userData.accountNumber}</p>
      
      <form onSubmit={handleSubmit} style={formStyle}>
        <div style={inputGroupStyle}>
          <label>Fraud Type:</label>
          <select
            value={fraudType}
            onChange={(e) => setFraudType(e.target.value)}
            required
            style={inputStyle}
          >
            <option value="">Select Fraud Type</option>
            <option value="Phishing">Phishing</option>
            <option value="Unauthorized Transaction">Unauthorized Transaction</option>
            <option value="Identity Theft">Identity Theft</option>
            <option value="ATM Skimming">ATM Skimming</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div style={inputGroupStyle}>
          <label>Description of Fraud:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="4"
            style={inputStyle}
          />
        </div>

        <div style={inputGroupStyle}>
          <label>Incident Date:</label>
          <input
            type="date"
            value={incidentDate}
            onChange={(e) => setIncidentDate(e.target.value)}
            required
            style={inputStyle}
          />
        </div>

        {error && <p style={errorStyle}>{error}</p>}
        {successMessage && <p style={successStyle}>{successMessage}</p>}

        <button type="submit" style={buttonStyle}>Submit Complaint</button>
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

const successStyle = {
  color: "green",
  fontSize: "14px",
  marginBottom: "10px",
};

export default Fraud;

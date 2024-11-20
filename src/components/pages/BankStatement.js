import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BankStatement = () => {
  const [userData, setUserData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get data from localStorage or state management
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
      // Simulating the bank transactions (could be dynamic in real-world apps)
      setTransactions([
        {
          date: "2024-11-15",
          type: "Deposit",
          amount: 500,
          balanceAfter: 500,
        },
        {
          date: "2024-11-16",
          type: "Debit",
          amount: 200,
          balanceAfter: 300,
        },
        {
          date: "2024-11-17",
          type: "Deposit",
          amount: 1000,
          balanceAfter: 1300,
        },
      ]);
    }
  }, []);

  // Redirect to other pages like Credit, Debit, Fraud
  const handleRedirect = (page) => {
    navigate(`/${page}`);
  };

  return (
    <div style={containerStyle}>
      <h2>Bank Statement</h2>
      {userData ? (
        <div>
          {/* Account Status Section */}
          <div style={statusContainerStyle}>
            <h3>Account Status</h3>
            <p><strong>Account Type:</strong> {userData.accountType}</p>
            <p><strong>Balance:</strong> {userData.balance}</p>
            <p><strong>Account Status:</strong> Active</p> {/* Can be dynamic based on real status */}
          </div>

          {/* Transaction Table */}
          <h3>Transactions</h3>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Balance After</th>
              </tr>
            </thead>
            <tbody>
              {transactions.length > 0 ? (
                transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td>{transaction.date}</td>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.balanceAfter}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No transactions found.</td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Navigation buttons */}
          <div style={buttonContainerStyle}>
            <button onClick={() => handleRedirect("credit")} style={buttonStyle}>Credit Money</button>
            <button onClick={() => handleRedirect("debit")} style={buttonStyle}>Debit Money</button>
            <button onClick={() => handleRedirect("fraud")} style={buttonStyle}>Fraud/Dispute</button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

// Styles
const containerStyle = {
  padding: "20px",
  maxWidth: "800px",
  margin: "0 auto",
  textAlign: "center",
};

const statusContainerStyle = {
  padding: "15px",
  marginBottom: "30px",
  backgroundColor: "#f2f2f2",
  borderRadius: "5px",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const tableRowStyle = {
  borderBottom: "1px solid #ddd",
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

export default BankStatement;

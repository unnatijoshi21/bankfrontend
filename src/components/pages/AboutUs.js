import React from "react";

const AboutUs = () => {
  const bankDetails = {
    name: "Deloitted Bank",
    mission: "Empowering customers with real-time banking solutions.",
    vision:
      "To be a leader in the financial industry, offering secure and innovative services.",
    values: ["Integrity", "Customer-Centricity", "Innovation", "Security"],
    stats: {
      customers: "10M+",
      branches: "500+",
      transactionsPerDay: "1M+",
    },
  };

  const fraudPrevention = [
    "Advanced AI-driven fraud detection.",
    "Real-time monitoring of transactions.",
    "Compliance with global security standards.",
  ];

  // Inline styles
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    color: "#333",
  };

  const headingStyle = {
    color: "#2c3e50",
    marginBottom: "15px",
  };

  const listStyle = {
    listStyleType: "square",
    marginLeft: "20px",
    lineHeight: "1.6",
  };

  const paragraphStyle = {
    lineHeight: "1.6",
    marginBottom: "15px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>About {bankDetails.name}</h1>
      <p style={paragraphStyle}>
        <strong>Mission:</strong> {bankDetails.mission}
      </p>
      <p style={paragraphStyle}>
        <strong>Vision:</strong> {bankDetails.vision}
      </p>
      <h2 style={headingStyle}>Our Values</h2>
      <ul style={listStyle}>
        {bankDetails.values.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <h2 style={headingStyle}>Bank Highlights</h2>
      <ul style={listStyle}>
        <li>Customers Served: {bankDetails.stats.customers}</li>
        <li>Branches Worldwide: {bankDetails.stats.branches}</li>
        <li>Transactions Processed Daily: {bankDetails.stats.transactionsPerDay}</li>
      </ul>
      <h2 style={headingStyle}>Fraud Prevention</h2>
      <ul style={listStyle}>
        {fraudPrevention.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default AboutUs;
import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '40px 0',
    fontSize: '14px',
    position: 'relative',
    bottom: '0',
    width: '100%',
  };

  const sectionStyle = {
    width: '25%',
    padding: '0 20px',
  };

  const h4Style = {
    fontSize: '18px',
    marginBottom: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    transition: 'color 0.3s',
  };

  const linkHoverStyle = {
    color: '#3498db',
  };

  return (
    <footer style={footerStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', marginBottom: '20px' }}>
        <div style={sectionStyle}>
          <h4 style={h4Style}>About Us</h4>
          <p>
            Our bank has been serving customers for over 100 years. We provide a wide range of financial services,
            including personal banking, loans, and investment solutions.
          </p>
        </div>

        <div style={sectionStyle}>
          <h4 style={h4Style}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: '0' }}>
            <li>
              <a href="/about-us" style={linkStyle}>About Us</a>
            </li>
            <li>
              <a href="/contact" style={linkStyle}>Contact Us</a>
            </li>
            <li>
              <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div style={sectionStyle}>
          <h4 style={h4Style}>Contact Us</h4>
          <p>Phone: +91 9345567890</p>
          <p>Email: support@deloittedbank.com</p>
          <p>Address: 123 Banking Street, Bangalore, India</p>
        </div>

        
      </div>
      <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '20px' }}>
        <p>&copy; 2024 Deloitted Bank. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

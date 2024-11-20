import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // State to store the form values
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // To show loading status
  const [error, setError] = useState(null); // To handle error messages
  const [success, setSuccess] = useState(null); // To show success messages
  const navigate = useNavigate()

  // Inline styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '65vh',
    backgroundColor: '#f4f4f4',
    padding: '20px',
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '300px',
    textAlign: 'center',
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '16px',
  };

  const buttonStyle = {
    padding: '10px',
    backgroundColor: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: '#2980b9',
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && password) {
      setLoading(true); // Set loading state to true while submitting

      try {
        // Replace the URL with your backend API endpoint
        const response = await fetch('https://api.example.com/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // If successful, set success message
          setSuccess('Login successful!');
          navigate('/UserProfile.js')
          setError(null); // Clear any previous error
          setLoading(false); // Reset loading state

          // Optionally save the token or redirect user
          // Example: localStorage.setItem('authToken', data.token);

          // Optionally reset form fields
          setUsername('');
          setPassword('');
        } else {
          throw new Error(data.message || 'Login failed');
        }
      } catch (error) {
        // If there was an error, display the error message
        setError(error.message || 'Error logging in. Please check your username and password.');
        setSuccess(null); // Clear any success messages
        setLoading(false); // Reset loading state
      }
    } else {
      alert('Please fill in both fields');
    }
  };

  return (
    <div style={containerStyle}>
      <h1>Login</h1>
      <form style={formStyle} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          required
        />
        <button
          type="submit"
          style={buttonStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
          disabled={loading} // Disable button while loading
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>

      {/* Display error or success message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  );
};

export default Login;
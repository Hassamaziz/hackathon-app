// LoginPage.js
import Link from 'next/link';

const loginContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  
};

const formStyle = {
  width: '300px',
  padding: '20px',
  color:'white',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#2c3e50', 
};

const inputStyle = {
  width: '100%',
  marginBottom: '15px',
  padding: '10px',
  boxSizing: 'border-box',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#3498db',
  color: 'white',
  cursor: 'pointer',
};

const DoctorLoginPage = () => {
  return (
    <div style={loginContainerStyle}>
      <form style={formStyle}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Doctor Login</h2>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" style={inputStyle} />

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" style={inputStyle} />

        <button type="submit" style={buttonStyle}>
          Login
        </button>

      </form>
    </div>
  );
};

export default DoctorLoginPage;

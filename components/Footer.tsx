import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#222',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      fontSize: '14px',
    }}>
      <p>&copy; 2025 Skiddo. All rights reserved.</p>
      <p>
        <a href="#privacy" style={{ color: '#fff', textDecoration: 'none', marginRight: '15px' }}>Privacy Policy</a>
        <a href="#terms" style={{ color: '#fff', textDecoration: 'none' }}>Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;

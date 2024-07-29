import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <h3>&copy; {new Date().getFullYear()} Vishesh Dwivedi. All rights reserved.</h3>
    </footer>
  );
};

const footerStyle = {
  position: 'flex',
  left: '0',
  bottom: '0',
  width: '100%',
  backgroundColor: 'rgba(0,0,0,0.4)',
  color: '#ff6a95',
  textAlign: 'center',
  padding: '10px 0'
};

export default Footer;

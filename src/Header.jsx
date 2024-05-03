import React from 'react';
import logo from './logoo.png';  
import './styles.css';  

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Forum Logo" className="logo" />
    </header>
  );
}

export default Header;
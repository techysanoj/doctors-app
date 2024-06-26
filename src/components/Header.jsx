import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={`${import.meta.env.PUBLIC_URL}/doctorlogo.png`} alt="Doctris Logo" className="logo-image" />
        <div className="logo-text">Acopic</div>
      </div>
      <nav>
        <ul>
          <li><Link to="/"></Link></li>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/patients">Patients</Link></li>
          <li><Link to="/pharmacy">Pharmacy</Link></li>
          <li><Link to="/pages">Pages</Link></li>
        </ul>
      </nav>
      <div className="user-actions">
        <Link to="/login" className="login">Login</Link>
        <Link to="/signup" className="signup">Signup</Link>
        <button className="settings">⚙️</button>
        <button className="profile">👤</button>
      </div>
    </header>
  );
}

export default Header;

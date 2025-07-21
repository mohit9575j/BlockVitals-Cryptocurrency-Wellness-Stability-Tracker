 

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Menu.css";

function Menu() {
  const navigate = useNavigate();

  //Logout handler
  const handleLogout = () => {
    localStorage.removeItem("token"); //Token deleted
    navigate("/login");                
  };

  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="logo">
          CryptoHealth
        </Link>
      </div>

      {/* Right menu */}
      <div className="nav-links">
        <Link to="/dashboard" className="nav-item">Dashboard</Link>
        <Link to="/cryptoconverter" className="nav-item">Converter</Link>
        <Link to="/topgainerslosers" className="nav-item">Gainers</Link>
        <Link to="/historical" className="nav-item">History</Link>
        <Link to="/stable" className="nav-item">Stable</Link>
        <Link to="/news" className="nav-item">News</Link>

        {/* 🔘 Logout Button */}
        <button
          onClick={handleLogout}
          className="nav-item bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Menu;

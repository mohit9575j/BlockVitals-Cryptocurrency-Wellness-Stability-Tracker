 

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      {/* Main Footer Row */}
      <div style={styles.footerRow}>
        {/* Left: Logo */}
        <div style={styles.section}>
          <h1 style={styles.logo}  >CryptoHealth</h1>
        </div>
      
        {/* Center: Menu */}
        <div style={styles.menu}>
          <div style={styles.menuColumn}>
            <h3 style={styles.heading}>About</h3>
            <Link to="/dashboard" style={styles.link}>Dashboard</Link>
            <Link to="/cryptoconverter" style={styles.link}>Converter</Link>
            <Link to="/topgainerslosers" style={styles.link}>Gainers</Link>
            <Link to="/historical" style={styles.link}>Historical</Link>
            <Link to="/stable" style={styles.link}>Stable</Link>
            <Link to="/news" style={styles.link}>News</Link>
          </div>
          <div style={styles.menuColumn}>
            <h3 style={styles.heading}>Contact us</h3>
          <a href="tel:9617287251" style={styles.link}>📞 Phone: 9617287251</a>
       <a href="mailto:mohit.joshise@gmail.com" style={styles.link}>📧 Email: mohit.joshise@gmail.com</a>
<a 
  href="https://wa.me/91XXXXXXXXXX" 
  target="_blank" 
  rel="noopener noreferrer" 
  style={styles.link}
>
  📱 WhatsApp
</a>

<a href="https://github.com/mohit9575j" target="_blank" rel="noopener noreferrer" style={styles.link}>
  🐱 Github
</a>          </div>
        </div>

        {/* Right: Contact */}
        <div style={styles.section}>
          <h3 style={styles.heading}>Address</h3>
          <p style={styles.contact}>📧 India,</p>
          <p style={styles.contact}> Indore, Mayur Hospital</p>
                    <p style={styles.contact}>452016 </p>

        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <p style={{ margin: 0, fontSize: "14px" }}>
          © Copyright by Mohit Joshi, Software Developer
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#1f1c2c",
    color: "#fff",
    padding: "40px 60px",
    fontFamily: "Arial, sans-serif"
  },
  footerRow: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    alignItems: "flex-start",
    marginBottom: "30px"
  },
  section: {
    flex: "1",
    minWidth: "200px",
  },
  logo: {
    fontSize: "60px",
    color: "#4fc3f7",
    margin: 0
  },
  menu: {
    display: "flex",
    gap: "60px",
    justifyContent: "center",
    flex: "2",
    minWidth: "300px",
  },
  menuColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  heading: {
    fontWeight: "bold",
    fontSize: "18px",
    marginBottom: "10px",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
  },
  contact: {
    margin: "4px 0",
    fontSize: "14px"
  },
  bottomBar: {
    borderTop: "1px solid #444",
    paddingTop: "10px",
    textAlign: "center"
  }
};

export default Footer;

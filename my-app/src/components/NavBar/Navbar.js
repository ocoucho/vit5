import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Navbar.css"; // Import styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>My App</h1>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/nothome">NotHome</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar; // Always export components

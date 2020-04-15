import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar fixed-top navbar-light bg-light navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <div>
          <div className="navbar-nav">
            <Link to="/photos" className="navbar-item nav-link">
              Photos
            </Link>
            <Link to="/" className="navbar-item nav-link">
              Photo
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

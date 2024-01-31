import React from "react";
import { Outlet, NavLink } from "react-router-dom";

function RootLayouts() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <h1>
            <NavLink to="/" className="nav-logo">
              Navbar
            </NavLink>
          </h1>
          <div className="link-container">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="about" className="nav-link">
              about
            </NavLink>
            <NavLink to="help" className="nav-link">
              Help
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayouts;

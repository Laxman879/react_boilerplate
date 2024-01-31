import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HelpLayouts() {
  return (
    <div>
      <h2>Help peoples</h2>
      <p>
        Lore is a body of knowledge or tradition that is passed down through a
        culture, typically orally. It can also refer to traditional knowledge,
        beliefs, and stories about a specific place,
      </p>

      <NavLink to="faq">View the FAQ</NavLink>
      <NavLink to="contact">Contact Us</NavLink>
      <Outlet />
    </div>
  );
}

export default HelpLayouts;

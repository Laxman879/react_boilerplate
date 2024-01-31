import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>NotFound...............!</h2>
      <p>
        Go to <Link to="/">HomePage</Link>
      </p>
    </div>
  );
}

export default NotFound;

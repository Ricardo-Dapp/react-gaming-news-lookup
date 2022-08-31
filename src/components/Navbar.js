import React from "react";
import "../Navbar.css";

const Navbar = () => {
  let currentDate = new Date();
  let date = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();

  return (
    <div className="navbar-container">
      <h2>Gamings News Today</h2>
      <div>
        {month}/{date}/{year}
      </div>
    </div>
  );
};

export default Navbar;

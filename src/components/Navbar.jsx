import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          <span className="logo" aria-hidden="true" />
          <span>Laos Travel</span>
        </Link>

        <button className="menu-toggle" type="button" onClick={() => setOpen((v) => !v)}>
          Menu
        </button>

        <nav className={`menu ${open ? "open" : ""}`}>
          <NavLink to="/itinerary" onClick={() => setOpen(false)}>Itinerary</NavLink>
          <NavLink to="/destinations" onClick={() => setOpen(false)}>Destinations</NavLink>
          <NavLink to="/pricing" onClick={() => setOpen(false)}>Pricing</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

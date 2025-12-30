import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" to="/" onClick={closeMenu}>
          <span className="logo" aria-hidden="true" />
          <span>MGBJ Travel</span>
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={open ? "true" : "false"}
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          Menu
        </button>

        <nav className={`menu ${open ? "open" : ""}`} data-menu>
          <NavLink to="/laos" onClick={closeMenu}>
            Laos Retreat
          </NavLink>
          <NavLink to="/vientiane" onClick={closeMenu}>
            Vientiane
          </NavLink>
          <NavLink to="/luang-prabang" onClick={closeMenu}>
            Luang Prabang
          </NavLink>
          <NavLink to="/vang-vieng" onClick={closeMenu}>
            Vang Vieng
          </NavLink>
          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

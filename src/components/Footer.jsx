import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container row">
        <div>
          <b>MGBJ Travel</b>
          <br />
          <small>Wellness Retreat Tours • Laos</small>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link to="/laos">Laos Retreat</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <small>© {year} MGBJ Travel</small>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container row">
        <div>
          <b>Laos Travel</b>
          <br />
          <small>8D7N Vientiane • Luang Prabang • Vang Vieng</small>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link to="/itinerary">Itinerary</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <small>© {new Date().getFullYear()}</small>
        </div>
      </div>
    </footer>
  );
}

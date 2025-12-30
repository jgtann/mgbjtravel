import React from "react";
import { Link } from "react-router-dom";
import { PACKAGE } from "../data/laos8d7n.js";

export default function Destinations() {
  return (
    <main className="section">
      <div className="container">
        <span className="badge">📍 Destinations</span>
        <h1>Three bases on one route</h1>
        <p>
          The itinerary is built around Vientiane → Luang Prabang, with an optional Vang Vieng extension.
        </p>

        <div className="grid cards" style={{ marginTop: 18 }}>
          <article className="card">
            <h3>Vientiane</h3>
            <p>Patuxay Monument, That Luang Stupa, Lao Art Museum, Home of Light.</p>
          </article>
          <article className="card">
            <h3>Luang Prabang</h3>
            <p>Kuang Si Waterfall, alms giving, Xiengthong Temple, Pak Ou Cave, Phu Si Hill, night market.</p>
          </article>
          <article className="card">
            <h3>Vang Vieng (Extension)</h3>
            <p>Nam Song River boat ride + adventure day: kayaking, caves, tubing, zipline, Blue Lagoon.</p>
          </article>
        </div>

        <div className="panel" style={{ marginTop: 18 }}>
          <h2>Transport highlights</h2>
          <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
            <li>High-speed train between Vientiane and Luang Prabang (First Class).</li>
            <li>Coach transfers for Vang Vieng extension and return to Vientiane.</li>
          </ul>

          <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn" to="/itinerary">See full itinerary</Link>
            <Link className="btn secondary" to="/pricing">See pricing</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

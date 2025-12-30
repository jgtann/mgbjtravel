import React from "react";
import { Link } from "react-router-dom";
import { PACKAGE } from "../data/laos8d7n.js";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">🇱🇦 {PACKAGE.title}</span>
            <h1>Discover Laos in 8D7N — temples, waterfalls, caves, and karst landscapes.</h1>
            <p className="lead">
              Follow a curated route from <b>Vientiane</b> to <b>Luang Prabang</b>, with an optional extension to
              <b> Vang Vieng</b>. Based on the official itinerary and quotation details.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <Link className="btn" to="/itinerary">View itinerary</Link>
              <Link className="btn secondary" to="/pricing">See pricing</Link>
            </div>

            <div className="kpis">
              <div className="kpi">
                <b>8D7N</b>
                <span>Feb 22 – Mar 1, 2026</span>
              </div>
              <div className="kpi">
                <b>Train</b>
                <span>High-speed (First Class)</span>
              </div>
              <div className="kpi">
                <b>Option</b>
                <span>Vang Vieng extension</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="img" role="img" aria-label="Laos travel hero placeholder" />
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
              <span className="pill">Patuxay + That Luang</span>
              <span className="pill">Kuang Si Waterfall</span>
              <span className="pill">Pak Ou Cave</span>
              <span className="pill">Blue Lagoon</span>
            </div>
            <p style={{ margin: "12px 0 0" }}>
              Swap in your own photos later (temples, waterfalls, night markets, karst mountains).
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>What you’ll experience</h2>
          <div className="grid cards" style={{ marginTop: 16 }}>
            <article className="card">
              <h3>Vientiane</h3>
              <p>Patuxay Monument, That Luang Stupa, Lao Art Museum, Home of Light.</p>
            </article>
            <article className="card">
              <h3>Luang Prabang</h3>
              <p>Kuang Si Waterfall, alms giving, National Museum, Xiengthong Temple, night market.</p>
            </article>
            <article className="card">
              <h3>Vang Vieng (Extension)</h3>
              <p>Nam Song River boat, kayaking, caves, tubing, zipline, Blue Lagoon.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function VangVieng() {
  return (
    <main className="section">
      <div className="container">
        <span className="badge">⛰️ Destination Spotlight</span>
        <h1>Vang Vieng: your nature-powered reset</h1>
        <p>
          Limestone karsts, open skies, and a slower countryside pace make Vang Vieng ideal for a deep exhale.
          We keep experiences <b>light, flexible, and comfort-first</b>, with plenty of downtime.
        </p>

        <div className="grid cards" style={{ marginTop: 18 }}>
          <article className="card">
            <h3>Breath + space</h3>
            <p>Open landscapes support breathwork and gentle movement without pressure.</p>
          </article>
          <article className="card">
            <h3>Gentle adventure</h3>
            <p>Short hikes and viewpoints chosen for safety and comfort—no extreme routes required.</p>
          </article>
          <article className="card">
            <h3>Deep rest</h3>
            <p>Downtime is the feature: naps, reading, tea, and slow evenings.</p>
          </article>
        </div>

        <div className="panel" style={{ marginTop: 18 }}>
          <h2>Signature moments we love</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.8 }}>
            <li>Sunset viewpoint (slow climb option + rest stops)</li>
            <li>River moment (quiet time, photos, mindful sitting)</li>
            <li>Optional gentle hike based on your energy</li>
            <li>Evening wind-down routine for better sleep</li>
          </ul>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn" to="/contact">
              Enquire about Vang Vieng
            </Link>
            <Link className="btn secondary" to="/laos">
              See the full retreat
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

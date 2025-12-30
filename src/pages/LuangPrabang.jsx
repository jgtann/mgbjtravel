import React from "react";
import { Link } from "react-router-dom";

export default function LuangPrabang() {
  return (
    <main className="section">
      <div className="container">
        <span className="badge">🏯 Destination Spotlight</span>
        <h1>Luang Prabang: where culture feels like calm</h1>
        <p>
          This UNESCO town invites you to slow down. We build your days around <b>quiet mornings</b>, gentle heritage walks,
          and restorative breaks—so you feel nourished rather than “tour-ed out”.
        </p>

        <div className="grid cards" style={{ marginTop: 18 }}>
          <article className="card">
            <h3>Mindful mornings</h3>
            <p>Short guided breathwork + easy movement to start the day softly.</p>
          </article>
          <article className="card">
            <h3>Slow heritage</h3>
            <p>Wander, pause, sit—experience culture with space to feel, not just to photograph.</p>
          </article>
          <article className="card">
            <h3>Restorative rhythm</h3>
            <p>Wellness rituals and downtime built in—your body gets to catch up.</p>
          </article>
        </div>

        <div className="panel" style={{ marginTop: 18 }}>
          <h2>Signature moments we love</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.8 }}>
            <li>Early quiet time (journaling, tea, or mindful walking)</li>
            <li>Unhurried cultural highlights with “rest stops”</li>
            <li>Evening wind-down routine (screen-free option)</li>
            <li>Optional add-on: extra spa or wellness session</li>
          </ul>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn" to="/contact">
              Enquire about Luang Prabang
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

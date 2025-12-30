import React from "react";
import { Link } from "react-router-dom";

export default function Vientiane() {
  return (
    <main className="section">
      <div className="container">
        <span className="badge">🧘 Destination Spotlight</span>
        <h1>Vientiane: a soft landing for your nervous system</h1>
        <p>
          Vientiane is perfect for easing into Laos—wide skies, slower streets, and a riverside rhythm that helps you reset.
          We plan this part of the retreat as a <b>recovery-first</b> start: sleep, hydration, gentle movement, and calm cultural moments.
        </p>

        <div className="grid cards" style={{ marginTop: 18 }}>
          <article className="card">
            <h3>Wellness flow</h3>
            <p>Optional morning stretch • temple stillness • spa recovery • sunset walk by the Mekong.</p>
          </article>
          <article className="card">
            <h3>Slow experiences</h3>
            <p>Unhurried cultural stops, café pauses, and time to journal—no rushing between highlights.</p>
          </article>
          <article className="card">
            <h3>Why it works</h3>
            <p>Starting gently reduces travel fatigue and makes the rest of the retreat feel smoother and more restorative.</p>
          </article>
        </div>

        <div className="panel" style={{ marginTop: 18 }}>
          <h2>Signature moments we love</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.8 }}>
            <li>Golden-hour riverside stroll (quiet conversation or mindful silence)</li>
            <li>Temple calm time (breath + presence, not “tour bus rushing”)</li>
            <li>Recovery spa session to loosen travel tension</li>
            <li>Light local tasting with an early night option</li>
          </ul>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn" to="/contact">
              Enquire about Vientiane
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

import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="badge">🌿 Wellness Retreat Tours • Laos</span>
            <h1>Reset gently in Laos—mindful mornings, nature therapy, and slow travel.</h1>
            <p className="lead">
              MGBJ Travel curates small-group wellness journeys designed to help you breathe deeper and live slower.
              Our signature route highlights three restorative bases: <b>Vientiane</b>, <b>Luang Prabang</b>, and <b>Vang Vieng</b>.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <Link className="btn" to="/laos">
                Explore the Laos Retreat
              </Link>
              <Link className="btn secondary" to="/contact">
                Enquire / Customise
              </Link>
            </div>

            <div className="kpis">
              <div className="kpi">
                <b>7–10 days</b>
                <span>Flexible itinerary</span>
              </div>
              <div className="kpi">
                <b>Mind + Body</b>
                <span>Yoga, spa, meditation</span>
              </div>
              <div className="kpi">
                <b>Slow pace</b>
                <span>More rest, less rush</span>
              </div>
            </div>
          </div>

          <div className="hero-card">
            <div className="img" role="img" aria-label="Abstract Laos wellness hero image placeholder" />
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, marginTop: 14, flexWrap: "wrap" }}>
              <span className="pill">Sunrise mindfulness</span>
              <span className="pill">Herbal spa rituals</span>
              <span className="pill">River + mountain calm</span>
            </div>
            <p style={{ margin: "12px 0 0" }}>
              Add your own images later (Mekong sunsets, temple silhouettes, limestone karsts).
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Three destinations. One wellness story.</h2>
          <p>Each stop offers a different kind of restoration—urban calm, cultural grounding, and nature-powered reset.</p>

          <div className="grid cards" style={{ marginTop: 16 }}>
            <article className="card">
              <span className="badge">🧘 Vientiane</span>
              <h3>Soft landing + gentle rhythm</h3>
              <p>Arrive slowly: riverside walks, café pauses, temple stillness, and a first spa session to reset your body clock.</p>
              <div className="meta">
                <span className="pill">Mekong sunset stroll</span>
                <span className="pill">Temple mindfulness</span>
                <span className="pill">Spa recovery</span>
              </div>
              <div style={{ marginTop: 14 }}>
                <Link className="btn secondary" to="/vientiane">
                  Spotlight Vientiane
                </Link>
              </div>
            </article>

            <article className="card">
              <span className="badge">🏯 Luang Prabang</span>
              <h3>Cultural calm + heart-opening days</h3>
              <p>Unplug in a UNESCO town: dawn quiet, traditional rituals, slow markets, and restorative sessions between heritage walks.</p>
              <div className="meta">
                <span className="pill">Mindful mornings</span>
                <span className="pill">Heritage slow walks</span>
                <span className="pill">Wellness rituals</span>
              </div>
              <div style={{ marginTop: 14 }}>
                <Link className="btn secondary" to="/luang-prabang">
                  Spotlight Luang Prabang
                </Link>
              </div>
            </article>

            <article className="card">
              <span className="badge">⛰️ Vang Vieng</span>
              <h3>Nature reset + breathwork space</h3>
              <p>Limestone karsts and open skies: light hikes, river moments, breathwork, and deep rest in a greener pace.</p>
              <div className="meta">
                <span className="pill">Karst viewpoints</span>
                <span className="pill">Breath + movement</span>
                <span className="pill">Nature therapy</span>
              </div>
              <div style={{ marginTop: 14 }}>
                <Link className="btn secondary" to="/vang-vieng">
                  Spotlight Vang Vieng
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="panel">
            <h2>What’s included (typical)</h2>
            <ul style={{ color: "var(--muted)", lineHeight: 1.8, marginTop: 10 }}>
              <li>Curated wellness-friendly stays (quiet, restorative vibe)</li>
              <li>Daily optional: yoga / stretch flow / breathwork (light & beginner-friendly)</li>
              <li>Spa / massage sessions on key recovery days</li>
              <li>Slow cultural experiences (temples, heritage walks, markets)</li>
              <li>Nature reset experiences (viewpoints, river moments, gentle hikes)</li>
            </ul>
            <div style={{ marginTop: 14, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn" to="/laos">
                See the sample itinerary
              </Link>
              <Link className="btn secondary" to="/contact">
                Build a custom retreat
              </Link>
            </div>
          </div>

          <div className="panel">
            <h2>Best for</h2>
            <p>
              Busy professionals, solo travellers who want structure, friends who want a calm trip, and anyone craving a reset without
              extreme schedules.
            </p>
            <h3 style={{ marginTop: 14 }}>Travel style</h3>
            <p>Small groups, balanced pacing, and plenty of free time for naps, journaling, cafés, and wandering.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

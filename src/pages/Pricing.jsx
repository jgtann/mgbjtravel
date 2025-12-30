import React from "react";
import { Link } from "react-router-dom";
import { PACKAGE } from "../data/laos8d7n.js";

export default function Pricing() {
  return (
    <main className="section">
      <div className="container">
        <span className="badge">💵 Pricing</span>
        <h1>Package price & policies</h1>
        <p>All pricing and policies are taken from the quotation document. :contentReference[oaicite:4]{index=4}</p>

        <div className="grid cards" style={{ marginTop: 18 }}>
          <article className="card">
            <h3>{PACKAGE.pricing.groupA.label}</h3>
            <p className="lead" style={{ margin: "10px 0" }}>
              <b>{PACKAGE.pricing.groupA.price}</b>
            </p>
            <span className="pill">{PACKAGE.pricing.groupA.min}</span>
          </article>

          <article className="card">
            <h3>{PACKAGE.pricing.extension.label}</h3>
            <p className="lead" style={{ margin: "10px 0" }}>
              <b>{PACKAGE.pricing.extension.price}</b>
            </p>
            <span className="pill">Applies to Group B extension days</span>
          </article>
        </div>

        <div className="panel" style={{ marginTop: 18 }}>
          <h2>What’s included</h2>
          <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
            {PACKAGE.include.map((x, i) => (
              <li key={`inc-${i}`}>{x}</li>
            ))}
          </ul>

          <h2 style={{ marginTop: 18 }}>What’s excluded</h2>
          <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
            {PACKAGE.exclude.map((x, i) => (
              <li key={`exc-${i}`}>{x}</li>
            ))}
          </ul>

          <h2 style={{ marginTop: 18 }}>Policies</h2>
          <div className="grid cards" style={{ marginTop: 10 }}>
            <article className="card">
              <h3>Booking</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
                {PACKAGE.policies.booking.map((x, i) => (
                  <li key={`book-${i}`}>{x}</li>
                ))}
              </ul>
            </article>

            <article className="card">
              <h3>Cancellation</h3>
              <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
                {PACKAGE.policies.cancellation.map((x, i) => (
                  <li key={`can-${i}`}>{x}</li>
                ))}
              </ul>
            </article>

            <article className="card">
              <h3>Tips</h3>
              <p style={{ color: "var(--muted)" }}>{PACKAGE.policies.tips}</p>
            </article>
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
            <Link className="btn" to="/contact">Request a quote</Link>
            <Link className="btn secondary" to="/itinerary">View itinerary</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

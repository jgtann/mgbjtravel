import React from "react";
import { Link } from "react-router-dom";

export default function LaosRetreat() {
  return (
    <main className="section">
      <div className="container">
        <span className="badge">🌿 Signature Retreat</span>
        <h1>Laos Wellness Retreat (Sample 8-Day Flow)</h1>
        <p>
          This is a calm, flexible plan that balances guided wellness moments with generous free time.
          We can shorten it to 7 days or extend it to 10 days.
        </p>

        <div className="panel" style={{ marginTop: 18 }}>
          <h2>Sample itinerary</h2>

          <table className="itinerary" aria-label="Sample itinerary table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Base</th>
                <th>Wellness + experiences</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="day">Day 1</td>
                <td>Vientiane</td>
                <td>Arrive + gentle riverside walk. Evening wind-down routine + early night.</td>
              </tr>
              <tr>
                <td className="day">Day 2</td>
                <td>Vientiane</td>
                <td>Morning stretch flow (optional). Temple calm time + spa/massage recovery.</td>
              </tr>
              <tr>
                <td className="day">Day 3</td>
                <td>Luang Prabang</td>
                <td>Transfer + check-in. Slow heritage walk + quiet café/journaling hour.</td>
              </tr>
              <tr>
                <td className="day">Day 4</td>
                <td>Luang Prabang</td>
                <td>Mindful morning + cultural highlights at an unhurried pace. Rest + wellness ritual.</td>
              </tr>
              <tr>
                <td className="day">Day 5</td>
                <td>Luang Prabang</td>
                <td>Nature day with restorative breaks. Evening breathwork + sleep hygiene routine.</td>
              </tr>
              <tr>
                <td className="day">Day 6</td>
                <td>Vang Vieng</td>
                <td>Transfer into nature. Sunset viewpoint + grounding practice.</td>
              </tr>
              <tr>
                <td className="day">Day 7</td>
                <td>Vang Vieng</td>
                <td>Gentle hike or river moment (based on comfort). Free time for deep rest.</td>
              </tr>
              <tr>
                <td className="day">Day 8</td>
                <td>Depart</td>
                <td>Short morning stretch + departure. Optional add-on night in Vientiane.</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: 12 }}>
            Want a stronger spa focus, a more cultural focus, or more nature time? We’ll tune the pacing.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link className="btn" to="/contact">
              Request a quote
            </Link>
            <Link className="btn secondary" to="/">
              Back to home
            </Link>
          </div>
        </div>

        <div className="grid cards section" style={{ padding: "26px 0 0" }}>
          <article className="card">
            <h3>Retreat themes</h3>
            <p>Rest • Gentle movement • Deep breathing • Cultural grounding • Nature therapy • Digital detox.</p>
          </article>
          <article className="card">
            <h3>Comfort-first planning</h3>
            <p>We design around sleep, recovery, and realistic energy—not packed schedules.</p>
          </article>
          <article className="card">
            <h3>Small-group care</h3>
            <p>Ideal for solo travellers who want structure, or friends who want calm shared moments.</p>
          </article>
        </div>
      </div>
    </main>
  );
}

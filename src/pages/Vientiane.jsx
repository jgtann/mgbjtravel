import React from "react";
import { Link } from "react-router-dom";

export default function Vientiane() {
  // Pulled from your 8D7N itinerary PDF: Vientiane appears on Day 1 (arrival),
  // Day 4 (return from Luang Prabang), Day 7 (back from Vang Vieng), Day 8 (departure).
  const signatureMoments = [
    {
      title: "Patuxay + That Luang (arrival-day highlights)",
      detail:
        "After landing, we keep it simple: lunch, a gentle city introduction, then Patuxay Monument and That Luang Stupa.",
      vibe: "Grounding, cultural, low-pressure",
    },
    {
      title: "Laos HeartBeat Football Team exchange",
      detail:
        "A meaningful community moment: meet the Laos HeartBeat team, trophy + man of the match presentation, then shared time together.",
      vibe: "Warm, human, purpose-led",
    },
    {
      title: "Dinner + interaction with Laos youth",
      detail:
        "An easy-going evening that prioritises connection over rushing—good food, conversation, and cultural exchange.",
      vibe: "Connected, uplifting",
    },
    {
      title: "Lao Art Museum + Home of Light (return day)",
      detail:
        "When we return to Vientiane, we slow down with art and atmosphere—cultural stops that feel calm and reflective.",
      vibe: "Creative, restorative",
    },
    {
      title: "Shopping + local house visit + massage option (final stretch)",
      detail:
        "A soft finish: browse, visit, unwind with massage, and keep energy light before departure.",
      vibe: "Easy, decompressing",
    },
  ];

  const vientianeSchedule = [
    {
      day: "Day 1",
      date: "Feb 22, 2026",
      base: "Vientiane",
      plan: [
        "Arrive Wattay Airport → meet guide",
        "Lunch at local Laos restaurant",
        "Patuxay Monument + That Luang Stupa",
        "Hotel check-in",
        "Laos HeartBeat Football Team: trophy + man of the match",
        "Dinner + interaction with Laos youth",
      ],
      meals: "Lunch, Dinner",
    },
    {
      day: "Day 4",
      date: "Feb 25, 2026",
      base: "Vientiane",
      plan: [
        "High-speed train back from Luang Prabang (First Class)",
        "Lunch in Vientiane",
        "Lao Art Museum + Home of Light",
        "Hotel check-in",
        "Dinner at Kong View Restaurant",
      ],
      meals: "Breakfast, Lunch",
    },
    {
      day: "Day 7",
      date: "Feb 28, 2026",
      base: "Vientiane",
      plan: [
        "Return from Vang Vieng to Vientiane",
        "Shopping",
        "Local resident house visit",
        "Karaoke",
        "Massage (optional wind-down)",
      ],
      meals: "Breakfast, Lunch",
    },
    {
      day: "Day 8",
      date: "Mar 1, 2026",
      base: "Vientiane",
      plan: ["Breakfast", "Transfer to airport", "Fly to Singapore"],
      meals: "Breakfast",
    },
  ];

  return (
    <main className="section">
      <div className="container">
        <span className="badge">🧘 Destination Spotlight</span>
        <h1>Vientiane: a soft landing + meaningful connection</h1>
        <p>
          Vientiane is where we begin (and later return to) for a slower, steadier rhythm—
          the kind that helps everyone settle after travel. We keep the first day
          <b> gentle and grounded</b> with iconic city sights (Patuxay + That Luang),
          then move into the retreat’s heart: community connection through the
          Laos HeartBeat Football Team exchange and an evening with Laos youth.
        </p>

        <div className="grid cards" style={{ marginTop: 18 }}>
          <article className="card">
            <h3>Arrival-day flow</h3>
            <p>Lunch • Patuxay • That Luang • check-in • early evening connection (no rushing).</p>
          </article>
          <article className="card">
            <h3>Purpose-led moments</h3>
            <p>Football team meet + trophy exchange • dinner interaction with Laos youth.</p>
          </article>
          <article className="card">
            <h3>Return-day calm</h3>
            <p>Art + light-filled cultural stops • easy dinner • massage option before departure.</p>
          </article>
        </div>

        <div className="panel" style={{ marginTop: 18 }}>
          <h2>Signature moments we love in Vientiane</h2>

          <div className="grid cards" style={{ marginTop: 12 }}>
            {signatureMoments.map((m) => (
              <article className="card" key={m.title}>
                <h3 style={{ marginBottom: 6 }}>{m.title}</h3>
                <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>{m.detail}</p>
                <p style={{ marginTop: 10, fontSize: 13, color: "var(--muted)" }}>
                  <b>Vibe:</b> {m.vibe}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="panel" style={{ marginTop: 18 }}>
          <h2>Vientiane schedule (as per the 8D7N plan)</h2>

          <table className="itinerary" aria-label="Vientiane schedule table">
            <thead>
              <tr>
                <th>Day</th>
                <th>Date</th>
                <th>Base</th>
                <th>Plan</th>
                <th>Meals</th>
              </tr>
            </thead>
            <tbody>
              {vientianeSchedule.map((row) => (
                <tr key={`${row.day}-${row.date}`}>
                  <td className="day">{row.day}</td>
                  <td>{row.date}</td>
                  <td>{row.base}</td>
                  <td>
                    <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.7, color: "var(--muted)" }}>
                      {row.plan.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </td>
                  <td style={{ whiteSpace: "nowrap" }}>{row.meals}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
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

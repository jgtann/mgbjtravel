import React from "react";
import { Link } from "react-router-dom";

const vientianePlan = [
  {
    dayLabel: "Day 1",
    date: "Feb 22, 2026",
    base: "Vientiane",
    time: ["12:05pm"],
    title: "Arrival + Key Landmarks + Youth Exchange",
    bullets: [
      "Arrive at Wattay Airport and meet tour guide",
      "Lunch at local Laos restaurant",
      "Visit Patuxay Monument",
      "Visit That Luang Stupa",
      "Hotel check-in",
      "Introduce Laos HeartBeat Football Team; give out trophy + man of the match",
      "Dinner and interaction with Laos youth",
    ],
    meals: "Lunch, Dinner",
  },
  {
    dayLabel: "Day 4",
    date: "Feb 25, 2026",
    base: "Vientiane",
    time: ["12:20pm"],
    title: "Return to Vientiane + Arts & Light",
    bullets: [
      "Arrive in Vientiane (via high-speed train) and go for lunch at local restaurant",
      "Visit Lao Art Museum",
      "Visit Home of Light",
      "Hotel check-in",
      "Dinner at Kong View Restaurant",
    ],
    meals: "Breakfast, Lunch (Dinner listed in itinerary text)",
  },
  {
    dayLabel: "Day 5",
    date: "Feb 26, 2026",
    base: "Vientiane",
    time: ["6:00am", "10:00am"],
    title: "Group A Departure / Group B Extension",
    bullets: [
      "Breakfast at hotel",
      "Group A: transfer to airport + depart to Singapore",
      "Group B: coach to Vang Vieng (extension begins)",
    ],
    meals: "Breakfast",
    note: "This is the day the itinerary splits into Group A and Group B.",
  },
  {
    dayLabel: "Day 7",
    date: "Feb 28, 2026",
    base: "Vientiane",
    time: ["9:00am"],
    title: "Back to Vientiane + Leisure & Local Fun",
    bullets: [
      "Breakfast at hotel",
      "Return to Vientiane",
      "Shopping",
      "Local resident house visit",
      "Karaoke",
      "Massage",
    ],
    meals: "Breakfast, Lunch",
  },
];

function renderLines(lines) {
  if (!lines || lines.length === 0) return "—";
  if (lines.length === 1) return lines[0];
  return (
    <>
      {lines.map((t, i) => (
        <React.Fragment key={`${t}-${i}`}>
          {t}
          {i < lines.length - 1 ? <br /> : null}
        </React.Fragment>
      ))}
    </>
  );
}

export default function Vientiane() {
  return (
    <main className="section">
      <div className="container">
        <span className="badge">🧘 Destination Spotlight</span>
        <h1>Vientiane: landmarks, culture, and warm community moments</h1>

        <p>
          In this 8D7N route, Vientiane is not just a transit point—it’s where the journey begins with
          iconic monuments, and later returns for arts, light installations, and relaxed leisure time
          (shopping, massage, karaoke). :contentReference[oaicite:1]{index=1}
        </p>

        <div className="grid cards" style={{ marginTop: 18 }}>
          <article className="card">
            <h3>Iconic landmarks</h3>
            <p>Patuxay Monument and That Luang Stupa are the headline visits on arrival day.</p>
          </article>
          <article className="card">
            <h3>Arts & Light</h3>
            <p>Lao Art Museum + Home of Light are featured after returning from Luang Prabang.</p>
          </article>
          <article className="card">
            <h3>Community moments</h3>
            <p>Special interaction with Laos youth / Laos HeartBeat Football Team is included on Day 1.</p>
          </article>
        </div>

        <div className="panel" style={{ marginTop: 18 }}>
          <h2>Vientiane itinerary highlights (from the tour plan)</h2>

          <table className="itinerary" aria-label="Vientiane itinerary table">
            <thead>
              <tr>
                <th>Day / Date</th>
                <th>Time</th>
                <th>Focus</th>
                <th>What’s planned</th>
                <th>Meals</th>
              </tr>
            </thead>
            <tbody>
              {vientianePlan.map((d) => (
                <tr key={`${d.dayLabel}-${d.date}`}>
                  <td className="day">
                    {d.dayLabel}
                    <br />
                    {d.date}
                  </td>
                  <td>{renderLines(d.time)}</td>
                  <td>
                    <b>{d.title}</b>
                    <div style={{ marginTop: 6, color: "var(--muted)" }}>{d.base}</div>
                    {d.note ? (
                      <div style={{ marginTop: 8 }}>
                        <span className="pill">{d.note}</span>
                      </div>
                    ) : null}
                  </td>
                  <td>
                    <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.6 }}>
                      {d.bullets.map((b, i) => (
                        <li key={`${d.dayLabel}-b-${i}`}>{b}</li>
                      ))}
                    </ul>
                  </td>
                  <td>{d.meals}</td>
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

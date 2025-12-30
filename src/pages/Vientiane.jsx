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
    meals: "Breakfast, Lunch, Dinner",
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
        <h1>Vientiane: a soft landing for your nervous system</h1>
        <p>
          Vientiane is where the journey begins with iconic landmarks, and where you return later for arts, light
          installations, and relaxed leisure time (shopping, massage, karaoke).
        </p>

        {/* Re-coded to match the earlier "spotlight" layout: 3 cards + a signature panel list */}
        <div className="grid cards" style={{ marginTop: 18 }}>
          <article className="card">
            <h3>Wellness flow</h3>
            <p>
              Arrival-day pacing with hotel check-in, plus easy evenings—designed to keep energy steady and avoid overloading.
            </p>
          </article>

          <article className="card">
            <h3>Signature stops</h3>
            <p>
              Patuxay Monument, That Luang Stupa, Lao Art Museum, and Home of Light—key highlights across the Vientiane days.
            </p>
          </article>

          <article className="card">
            <h3>Local connection</h3>
            <p>
              A meaningful community moment: Laos HeartBeat Football Team introduction and youth interaction is built into Day 1.
            </p>
          </article>
        </div>

        <div className="panel" style={{ marginTop: 18 }}>
          <h2>Vientiane plan (from the itinerary)</h2>

          {vientianePlan.map((d) => (
            <div
              key={`${d.dayLabel}-${d.date}`}
              style={{
                border: "1px solid var(--line)",
                borderRadius: 16,
                padding: 14,
                background: "rgba(255,255,255,.03)",
                marginTop: 12,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div>
                  <b>
                    {d.dayLabel} • {d.date}
                  </b>
                  <div style={{ marginTop: 6, color: "var(--muted)" }}>
                    {d.base} • {renderLines(d.time)}
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <span className="pill">{d.meals}</span>
                </div>
              </div>

              <div style={{ marginTop: 10 }}>
                <b>{d.title}</b>
                {d.note ? (
                  <div style={{ marginTop: 8 }}>
                    <span className="pill">{d.note}</span>
                  </div>
                ) : null}

                <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "var(--muted)", lineHeight: 1.6 }}>
                  {d.bullets.map((b, i) => (
                    <li key={`${d.dayLabel}-b-${i}`}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

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

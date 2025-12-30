import React from "react";
import { Link } from "react-router-dom";

const itinerary = [
  {
    dayLabel: "Day 1",
    date: "Feb 22, 2026",
    time: ["12:05pm"],
    base: "Vientiane",
    activities: [
      "Arrive at Wattay Airport. Meet guide → lunch at local restaurant.",
      "Visit Patuxay Monument & That Luang Stupa.",
      "Hotel check-in.",
      "Introduce Laos HeartBeat Football Team, give out trophy + man of the match.",
      "Dinner + interaction with Laos youth.",
    ],
    meals: "Lunch, Dinner",
  },
  {
    dayLabel: "Day 2",
    date: "Feb 23, 2026",
    time: ["8:00am", "9:50am"],
    base: "Luang Prabang",
    activities: [
      "Breakfast. Transfer to Vientiane train station.",
      "Depart to Luang Prabang by high-speed train (First Class).",
      "Arrive → lunch.",
      "Visit Kuang Si Waterfall / Bear Conservation.",
      "Check in (Luang Prabang View Hotel).",
      "Dinner at QQ (largest restaurant/bar, disco). Chill at hilltop pool.",
    ],
    meals: "Breakfast, Lunch, Dinner",
  },
  {
    dayLabel: "Day 3",
    date: "Feb 24, 2026",
    time: ["5:00am"],
    base: "Luang Prabang",
    activities: [
      "Alms Giving + morning market. Back to hotel breakfast.",
      "City tour: National Museum, Xiengthong Temple.",
      "Boat to Pak Ou Cave.",
      "Phu Si Hill.",
      "Night market.",
    ],
    meals: "Breakfast, Lunch",
  },
  {
    dayLabel: "Day 4",
    date: "Feb 25, 2026",
    time: ["8:00am", "10:15am", "12:20pm"],
    base: "Vientiane",
    activities: [
      "Breakfast. To train station.",
      "Depart to Vientiane by high-speed train (First Class).",
      "Arrive → lunch.",
      "Visit Lao Art Museum & Home of Light.",
      "Hotel check-in.",
      "Dinner at Kong View Restaurant.",
    ],
    meals: "Breakfast, Lunch, Dinner",
  },
  {
    dayLabel: "Day 5",
    date: "Feb 26, 2026",
    time: ["6:00am", "10:00am"],
    base: "Vientiane / Vang Vieng",
    // Special: split groups
    groupSplit: {
      title: "Group split",
      groups: [
        {
          name: "Group A",
          items: ["Transfer to airport → depart to Singapore."],
        },
        {
          name: "Group B",
          items: [
            "Coach to Vang Vieng → lunch → hotel check-in.",
            "Local boat along Nam Song River.",
            "Dinner at local restaurant + street walk.",
          ],
        },
      ],
    },
    meals: "Breakfast",
  },
  {
    dayLabel: "Day 6",
    date: "Feb 27, 2026",
    time: ["9:00am"],
    base: "Vang Vieng",
    activities: ["Breakfast. Activities: kayaking, caving, tubing, zipline, Blue Lagoon."],
    meals: "Breakfast, Lunch",
  },
  {
    dayLabel: "Day 7",
    date: "Feb 28, 2026",
    time: ["9:00am"],
    base: "Vientiane",
    activities: ["Breakfast. Return to Vientiane. Shopping, local resident house visit, karaoke, massage."],
    meals: "Breakfast, Lunch",
  },
  {
    dayLabel: "Day 8",
    date: "Mar 1, 2026",
    time: ["10:00am", "12:50pm", "5:00pm"],
    base: "Depart",
    activities: ["Breakfast. Depart to airport. Flight to Singapore. Arrive Singapore."],
    meals: "—",
  },
];

function renderCellLines(lines) {
  if (!lines || lines.length === 0) return null;
  if (lines.length === 1) return lines[0];
  return (
    <>
      {lines.map((t, idx) => (
        <React.Fragment key={`${t}-${idx}`}>
          {t}
          {idx < lines.length - 1 ? <br /> : null}
        </React.Fragment>
      ))}
    </>
  );
}

export default function LaosRetreat() {
  return (
    <main className="section">
      <div className="container">
        <span className="badge">🌿 Signature Retreat</span>
        <h1>Laos 8D7N: Vientiane → Luang Prabang → Vang Vieng</h1>
        <p>
          Itinerary dates: <b>Feb 22, 2026</b> to <b>Mar 1, 2026</b>. Includes high-speed train transfers
          (First Class) and planned meals as indicated.
        </p>

        <div className="panel" style={{ marginTop: 18 }}>
          <h2>Detailed itinerary</h2>

          <table className="itinerary" aria-label="Laos 8D7N itinerary table">
            <thead>
              <tr>
                <th>Day / Date</th>
                <th>Time</th>
                <th>Base</th>
                <th>Activities</th>
                <th>Meals</th>
              </tr>
            </thead>

            <tbody>
              {itinerary.map((row) => (
                <tr key={`${row.dayLabel}-${row.date}`}>
                  <td className="day">
                    {row.dayLabel}
                    <br />
                    {row.date}
                  </td>

                  <td>{renderCellLines(row.time)}</td>

                  <td>{row.base}</td>

                  <td>
                    {row.activities?.length ? (
                      <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.6 }}>
                        {row.activities.map((item, idx) => (
                          <li key={`${row.dayLabel}-act-${idx}`}>{item}</li>
                        ))}
                      </ul>
                    ) : null}

                    {row.groupSplit ? (
                      <div style={{ marginTop: row.activities?.length ? 10 : 0 }}>
                        <b>{row.groupSplit.title}:</b>
                        {row.groupSplit.groups.map((g, gIdx) => (
                          <div key={`${row.dayLabel}-group-${gIdx}`} style={{ marginTop: 8 }}>
                            <b>{g.name}:</b>
                            <ul style={{ margin: "6px 0 0", paddingLeft: 18, color: "var(--muted)", lineHeight: 1.6 }}>
                              {g.items.map((gi, giIdx) => (
                                <li key={`${row.dayLabel}-${g.name}-item-${giIdx}`}>{gi}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </td>

                  <td>{row.meals}</td>
                </tr>
              ))}
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
            <h3>Trip highlights</h3>
            <p>Patuxay • That Luang • Kuang Si Waterfall • Pak Ou Cave • Phu Si Hill • Nam Song River • Blue Lagoon</p>
          </article>

          <article className="card">
            <h3>Transport</h3>
            <p>High-speed train transfers between Vientiane and Luang Prabang (First Class) + coach transfers.</p>
          </article>

          <article className="card">
            <h3>Good to know</h3>
            <p>Meals are included only where indicated. Group A / Group B split happens on Day 5.</p>
          </article>
        </div>
      </div>
    </main>
  );
}

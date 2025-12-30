import React from "react";
import { Link } from "react-router-dom";
import { PACKAGE } from "../data/laos8d7n.js";

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

export default function Itinerary() {
  return (
    <main className="section">
      <div className="container">
        <span className="badge">🗓️ Itinerary</span>
        <h1>{PACKAGE.title}</h1>
        <p>
          Travel dates: <b>{PACKAGE.travelDates.start}</b> to <b>{PACKAGE.travelDates.end}</b>.
        </p>

        <div className="panel" style={{ marginTop: 18 }}>
          <table className="itinerary" aria-label="Laos 8D7N itinerary table">
            <thead>
              <tr>
                <th>Day / Date</th>
                <th>Time</th>
                <th>Base</th>
                <th>Plan</th>
                <th>Meals</th>
              </tr>
            </thead>
            <tbody>
              {PACKAGE.itinerary.map((d) => (
                <tr key={`${d.day}-${d.date}`}>
                  <td className="day">
                    {d.day}
                    <br />
                    {d.date}
                  </td>
                  <td>{renderLines(d.time)}</td>
                  <td>{d.base}</td>
                  <td>
                    {d.split ? (
                      <>
                        <div style={{ color: "var(--muted)" }}>
                          <b>{d.split.note}</b>
                        </div>
                        <div style={{ marginTop: 10 }}>
                          <b>Group A</b>
                          <ul style={{ margin: "6px 0 0", paddingLeft: 18, color: "var(--muted)", lineHeight: 1.6 }}>
                            {d.split.groupA.map((x, i) => (
                              <li key={`a-${i}`}>{x}</li>
                            ))}
                          </ul>
                        </div>
                        <div style={{ marginTop: 10 }}>
                          <b>Group B (Extension)</b>
                          <ul style={{ margin: "6px 0 0", paddingLeft: 18, color: "var(--muted)", lineHeight: 1.6 }}>
                            {d.split.groupB.map((x, i) => (
                              <li key={`b-${i}`}>{x}</li>
                            ))}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <ul style={{ margin: 0, paddingLeft: 18, color: "var(--muted)", lineHeight: 1.6 }}>
                        {d.items.map((x, i) => (
                          <li key={`${d.day}-${i}`}>{x}</li>
                        ))}
                      </ul>
                    )}
                  </td>
                  <td>{d.meals}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 14 }}>
            <Link className="btn" to="/pricing">View pricing</Link>
            <Link className="btn secondary" to="/contact">Request a quote</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

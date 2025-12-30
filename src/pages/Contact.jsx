import React, { useState } from "react";
import { PACKAGE } from "../data/laos8d7n.js";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    pax: "",
    group: "Group A (22–26 Feb 2026)",
    message: "",
  });

  function update(key, value) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    const to = PACKAGE.operator.email;
    const subject = `Enquiry: Laos 8D7N (${form.group}) — ${form.pax || "Pax?"}`;
    const body =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Pax: ${form.pax}\n` +
      `Package: ${PACKAGE.title}\n` +
      `Preferred group: ${form.group}\n\n` +
      `Message:\n${form.message}\n\n` +
      `Operator contact (from quotation): ${PACKAGE.operator.email}`;

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="section">
      <div className="container split">
        <div className="panel">
          <span className="badge">✉️ Contact</span>
          <h1>Request a quote</h1>
          <p>
            Send an enquiry for the <b>{PACKAGE.title}</b>. The email will be addressed to the operator contact shown in the
            quotation. :contentReference[oaicite:5]{index=5}
          </p>

          <form className="form" onSubmit={onSubmit}>
            <input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" required />
            <input
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              type="email"
              placeholder="Your email"
              required
            />
            <input value={form.pax} onChange={(e) => update("pax", e.target.value)} placeholder="How many pax?" />

            <select value={form.group} onChange={(e) => update("group", e.target.value)}>
              <option>Group A (22–26 Feb 2026)</option>
              <option>Group B (Extension to Vang Vieng)</option>
            </select>

            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="Any questions? (rooming, diet needs, flight timing, etc.)"
            />

            <button className="btn" type="submit">
              Send enquiry
            </button>

            <small>Opens your email app (no backend needed yet).</small>
          </form>
        </div>

        <div className="panel">
          <h2>Operator details</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.7 }}>
            <b>{PACKAGE.operator.name}</b>
            <br />
            {PACKAGE.operator.address}
            <br />
            Tel: {PACKAGE.operator.tel}
            <br />
            Email: {PACKAGE.operator.email}
          </p>

          <h2 style={{ marginTop: 18 }}>Good to know</h2>
          <ul style={{ margin: "10px 0 0", paddingLeft: 18, color: "var(--muted)", lineHeight: 1.7 }}>
            <li>{PACKAGE.policies.booking[0]}</li>
            <li>{PACKAGE.policies.booking[1]}</li>
            <li>{PACKAGE.policies.cancellation[0]}</li>
          </ul>
        </div>
      </div>
    </main>
  );
}

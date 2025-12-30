import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    destination: "Laos (Vientiane • Luang Prabang • Vang Vieng)",
    month: "",
    message: "",
  });

  function update(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();

    const to = "hello@mgbjtravel.com"; // change later
    const subject = `Wellness Retreat Enquiry – ${form.destination} (${form.month || "Preferred dates"})`;
    const body =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Destination focus: ${form.destination}\n` +
      `Preferred month: ${form.month}\n\n` +
      `Message:\n${form.message}`;

    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <main className="section">
      <div className="container split">
        <div className="panel">
          <span className="badge">✉️ Enquiry</span>
          <h1>Plan your Laos wellness retreat</h1>
          <p>
            Tell us your preferred month, travel style, and pace. We’ll propose a calm itinerary spotlighting Vientiane,
            Luang Prabang, and Vang Vieng.
          </p>

          <form className="form" onSubmit={onSubmit}>
            <input
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              placeholder="Your name"
              required
            />

            <input
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              type="email"
              placeholder="Your email"
              required
            />

            <select value={form.destination} onChange={(e) => update("destination", e.target.value)}>
              <option>Laos (Vientiane • Luang Prabang • Vang Vieng)</option>
              <option>Vientiane focus</option>
              <option>Luang Prabang focus</option>
              <option>Vang Vieng focus</option>
            </select>

            <input
              value={form.month}
              onChange={(e) => update("month", e.target.value)}
              placeholder="Preferred month (e.g., May 2026)"
            />

            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              placeholder="What kind of wellness do you want? (spa focus / yoga focus / nature reset / slow culture)"
            />

            <button className="btn" type="submit">
              Send enquiry
            </button>

            <small>Opens your email app (no backend needed yet). Later we can connect a real form + CRM.</small>
          </form>
        </div>

        <div className="panel">
          <h2>What we’ll ask (so we plan well)</h2>
          <ul style={{ color: "var(--muted)", lineHeight: 1.8 }}>
            <li>Your ideal pace (slow / moderate)</li>
            <li>Any mobility or comfort needs</li>
            <li>Wellness focus (spa / yoga / nature / culture)</li>
            <li>Room type and budget range</li>
          </ul>

          <h3 style={{ marginTop: 14 }}>Business email</h3>
          <p>
            <b>hello@mgbjtravel.com</b> (change to your real inbox later)
          </p>
        </div>
      </div>
    </main>
  );
}

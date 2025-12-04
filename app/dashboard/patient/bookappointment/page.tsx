"use client";

import { useState } from "react";
import axios from "axios";

export default function BookAppointment() {
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [reason, setReason] = useState("");

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    if (!token) return alert("Login first!");

    const res = await axios.post(
      "http://localhost:5000/api/appointments/",
      { doctor, date, reason },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    alert(res.data.message);
  };

  return (
    <div>
      <h2>Book Appointment</h2>

      <form onSubmit={handleBook}>
        <input
          type="text"
          className="border p-2"
          placeholder="Doctor ID"
          onChange={(e) => setDoctor(e.target.value)}
        />

        <input
          type="datetime-local"
          className="border p-2"
          onChange={(e) => setDate(e.target.value)}
        />

        <textarea
          className="border p-2"
          placeholder="Reason"
          onChange={(e) => setReason(e.target.value)}
        />

        <button type="submit" className="bg-green-600 text-white p-2 mt-3">
          Book Appointment
        </button>
      </form>
    </div>
  );
}

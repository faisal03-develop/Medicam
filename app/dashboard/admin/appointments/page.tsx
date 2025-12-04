"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Appointment {
  _id: string;
  date: string;
  status: string;
  patient?: { firstName: string };
  doctor?: { firstName: string };
}

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const loadAppointments = async () => {
    const res = await axios.get("http://localhost:5000/api/appointments/", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setAppointments(res.data);
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <div>
      <h2>All Appointments (Admin)</h2>

      {appointments.map((app) => (
        <div key={app._id} className="border p-3 my-2">
          <p>Patient: {app.patient?.firstName}</p>
          <p>Doctor: {app.doctor?.firstName}</p>
          <p>Date: {new Date(app.date).toLocaleString()}</p>
          <p>Status: {app.status}</p>
        </div>
      ))}
    </div>
  );
}

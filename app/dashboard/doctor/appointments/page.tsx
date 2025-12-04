"use client";

import { useEffect, useState } from "react";
import axios from "axios";

interface Appointment {
  _id: string;
  reason: string;
  date: string;
  status: string;
  patient: { firstName: string; lastName: string };
}

export default function DoctorAppointments() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const token = typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const loadAppointments = async () => {
    const res = await axios.get("http://localhost:5000/api/appointments/doctor", {
      headers: { Authorization: `Bearer ${token}` },
    });

    setAppointments(res.data);
  };

  const updateStatus = async (id: string, status: string) => {
    await axios.put(
      `http://localhost:5000/api/appointments/${id}`,
      { status },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    loadAppointments();
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  return (
    <div>
      <h2>Doctor Appointments</h2>

      {appointments.map((app) => (
        <div key={app._id} className="border p-3 my-2">
          <p>Patient: {app.patient.firstName}</p>
          <p>Date: {new Date(app.date).toLocaleString()}</p>
          <p>Reason: {app.reason}</p>
          <p>Status: {app.status}</p>

          <button
            className="bg-blue-600 text-white px-3 mr-2"
            onClick={() => updateStatus(app._id, "approved")}
          >
            Approve
          </button>

          <button
            className="bg-red-600 text-white px-3"
            onClick={() => updateStatus(app._id, "rejected")}
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}

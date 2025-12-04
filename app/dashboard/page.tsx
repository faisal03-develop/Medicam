"use client";


export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-sm text-gray-500">Upcoming Appointments</h3>
          <p className="text-3xl font-semibold mt-2">5</p>
        </div>

        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-sm text-gray-500">Pending Approvals</h3>
          <p className="text-3xl font-semibold mt-2">2</p>
        </div>

        <div className="bg-white p-6 shadow rounded-xl">
          <h3 className="text-sm text-gray-500">Completed</h3>
          <p className="text-3xl font-semibold mt-2">14</p>
        </div>
      </div>

      <div className="mt-10 bg-white p-6 shadow rounded-xl">
        <h2 className="text-xl font-semibold mb-3">Recent Appointments</h2>

        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="p-2">Patient</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">John Doe</td>
              <td className="p-2">28 Nov, 2025</td>
              <td className="p-2">Approved</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Sarah Khan</td>
              <td className="p-2">02 Dec, 2025</td>
              <td className="p-2">Pending</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

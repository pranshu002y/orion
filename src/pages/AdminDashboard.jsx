import { useEffect, useState } from "react";
import API from "../services/api";

const AdminDashboard = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSlots = async () => {
      try {
        setLoading(true);

        const res = await API.get("/slots");
        setSlots(res.data.slots || []);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSlots();
  }, []);

  const booked = slots.filter((s) => s.status === "booked").length;
  const available = slots.filter((s) => s.status === "available").length;

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6">Admin Dashboard</h1>
        <p className="text-gray-500">Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-gray-800">
          Admin Dashboard
        </h1>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Total Slots */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border">
            <p className="text-gray-500">📦 Total Slots</p>
            <h2 className="text-4xl font-bold mt-2 text-gray-800">
              {slots.length}
            </h2>
          </div>

          {/* Booked Slots */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border">
            <p className="text-gray-500">📌 Booked Slots</p>
            <h2 className="text-4xl font-bold mt-2 text-red-500">
              {booked}
            </h2>
          </div>

          {/* Available Slots */}
          <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-6 border">
            <p className="text-gray-500">✅ Available Slots</p>
            <h2 className="text-4xl font-bold mt-2 text-green-600">
              {available}
            </h2>
          </div>
        </div>

        {/* Extra Insight Section */}
        <div className="mt-10 bg-white p-6 rounded-xl border shadow-sm">
          <h3 className="text-lg font-semibold mb-4 text-gray-800">
            Quick Insights
          </h3>

          <div className="grid sm:grid-cols-2 gap-4 text-gray-600">
            <p>📊 Booking Rate: {slots.length ? ((booked / slots.length) * 100).toFixed(1) : 0}%</p>
            <p>🟢 Availability Rate: {slots.length ? ((available / slots.length) * 100).toFixed(1) : 0}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
import { useEffect, useState } from "react";
import API from "../services/api";

const Homepage = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSlots = async () => {
    try {
      setLoading(true);

      const { data } = await API.get("/slots");
      setSlots(data.slots || []);
    } catch (err) {
      console.log(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  const bookSlot = async (slotId) => {
    try {
      await API.post("/appointments/book", {
        slotId,
        notes: "Appointment Booking",
      });

      alert("Slot booked successfully 🚀");
      fetchSlots();
    } catch (error) {
      alert(error.response?.data?.message || "Booking failed");
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-700";
      case "booked":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-4xl font-bold mb-8">
          Available Slots
        </h1>
        <div className="text-gray-500">Loading slots...</div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900">
          Available Slots
        </h1>
        <p className="text-gray-500 mt-2">
          Select a time slot and book your appointment instantly
        </p>
      </div>

      {/* Empty state */}
      {slots.length === 0 ? (
        <div className="bg-gray-50 border rounded-xl p-8 text-center text-gray-500">
          No slots available at the moment
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {slots.map((slot) => (
            <div
              key={slot._id}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Date */}
              <h3 className="text-lg font-semibold text-gray-800">
                📅 {slot.date}
              </h3>

              {/* Time */}
              <p className="text-gray-600 mt-2">
                ⏰ {slot.startTime} - {slot.endTime}
              </p>

              {/* Status */}
              <div className="mt-3">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                    slot.status
                  )}`}
                >
                  {slot.status}
                </span>
              </div>

              {/* Button */}
              <button
                onClick={() => bookSlot(slot._id)}
                disabled={slot.status !== "available"}
                className={`mt-5 w-full py-2 rounded-xl font-medium transition ${
                  slot.status === "available"
                    ? "bg-black text-white hover:bg-gray-800"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                {slot.status === "available"
                  ? "Book Slot"
                  : "Not Available"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
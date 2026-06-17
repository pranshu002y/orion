import { useEffect, useState } from "react";
import API from "../services/api";
import CreateSlot from "../pages/CreateSlot";

const Manageslots = () => {
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

  const deleteSlot = async (id) => {
    try {
      await API.delete(`/slots/${id}`);
      fetchSlots();
    } catch (err) {
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Manage Slots</h1>
        <p className="text-gray-500">Loading slots...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-6 text-gray-800">
          Manage Slots
        </h1>

        {/* Create Slot Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
          <h2 className="text-lg font-semibold mb-4">Create New Slot</h2>
          <CreateSlot refresh={fetchSlots} />
        </div>

        {/* Slots Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Existing Slots
          </h2>

          {slots.length === 0 ? (
            <p className="text-gray-500">No slots created yet.</p>
          ) : (
            <div className="grid gap-4">
              {slots.map((slot) => (
                <div
                  key={slot._id}
                  className="bg-white border rounded-xl p-5 flex justify-between items-center hover:shadow-md transition"
                >
                  {/* Slot Info */}
                  <div>
                    <p className="text-gray-800 font-medium">
                      📅 {slot.date}
                    </p>
                    <p className="text-gray-600">
                      ⏰ {slot.startTime} - {slot.endTime}
                    </p>

                    <span
                      className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${
                        slot.status === "available"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {slot.status}
                    </span>
                  </div>

                  {/* Actions */}
                  <button
                    onClick={() => deleteSlot(slot._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manageslots;
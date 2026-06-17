import { useState } from "react";
import API from "../services/api";

const CreateSlot = ({ refresh }) => {
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!date || !startTime || !endTime) {
      alert("Please fill all fields");
      return;
    }

    if (startTime >= endTime) {
      alert("End time must be greater than start time");
      return;
    }

    try {
      setLoading(true);

      await API.post("/slots", {
        date,
        startTime,
        endTime,
      });

      alert("Slot created successfully ✅");

      setDate("");
      setStartTime("");
      setEndTime("");

      refresh?.();
    } catch (err) {
      alert(err.response?.data?.message || "Error creating slot");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-2xl p-6 sm:p-8 border">
      
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Create New Slot
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Select Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Time Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Start Time */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Start Time
            </label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* End Time */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              End Time
            </label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-medium transition
            ${loading 
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
        >
          {loading ? "Creating..." : "Create Slot"}
        </button>
      </form>
    </div>
  );
};

export default CreateSlot;
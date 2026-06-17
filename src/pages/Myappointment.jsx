import { useEffect, useState } from "react";
import API from "../services/api";

const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data } = await API.get("/appointments/my");

      console.log("API RESPONSE:", data);

      // SAFE handling (works for both formats)
      const list = data?.appointments || data || [];

      setAppointments(list);
    } catch (err) {
      console.error("Fetch error:", err);
      setError(
        err.response?.data?.message ||
          err.message ||
          "Failed to fetch appointments"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const cancelAppointment = async (id) => {
    try {
      await API.delete(`/appointments/${id}`);
      fetchAppointments();
    } catch (err) {
      console.error("Cancel error:", err);
      alert(
        err.response?.data?.message ||
          "Failed to cancel appointment"
      );
    }
  };

  // LOADING UI
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">
          My Appointments
        </h1>
        <p>Loading appointments...</p>
      </div>
    );
  }

  // ERROR UI
  if (error) {
    return (
      <div className="max-w-6xl mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">
          My Appointments
        </h1>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  // EMPTY STATE
  if (!appointments.length) {
    return (
      <div className="max-w-6xl mx-auto p-5">
        <h1 className="text-3xl font-bold mb-5">
          My Appointments
        </h1>
        <p>No appointments found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">
        My Appointments
      </h1>

      {appointments.map((item) => (
        <div
          key={item._id}
          className="bg-white p-4 rounded shadow mb-3"
        >
          <p>
            <strong>Date:</strong>{" "}
            {item.slotId?.date || "N/A"}
          </p>

          <p>
            <strong>Time:</strong>{" "}
            {item.slotId?.startTime || "N/A"}
          </p>

          <p>
            <strong>Status:</strong>{" "}
            {item.status}
          </p>

          {item.status !== "cancelled" && (
            <button
              onClick={() =>
                cancelAppointment(item._id)
              }
              className="bg-red-600 text-white px-3 py-2 rounded mt-3"
            >
              Cancel
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default MyAppointment;
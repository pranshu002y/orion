import { useEffect, useState } from "react";
import API from "../services/api";

const AdminAppointment = () => {
  const [appointments, setAppointments] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const fetchAppointments =
    async () => {
      try {
        setLoading(true);

        const { data } =
          await API.get(
            "/appointments"
          );

        console.log(data);

        setAppointments(
          data.appointments || []
        );
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Failed to load appointments"
        );
      } finally {
        setLoading(false);
      }
    };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const confirmAppointment =
    async (id) => {
      try {
        await API.put(
          `/appointments/confirm/${id}`
        );

        alert(
          "Appointment Confirmed & Email Sent"
        );

        fetchAppointments();
      } catch (error) {
        console.log(error);

        alert(
          error.response?.data
            ?.message ||
            "Failed to confirm appointment"
        );
      }
    };

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-bold">
          Loading...
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Appointment Requests
        </h1>

        <button
          onClick={fetchAppointments}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Refresh
        </button>
      </div>

      {appointments.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-6 text-center">
          No Appointments Found
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-5">
          {appointments.map(
            (appointment) => (
              <div
                key={
                  appointment._id
                }
                className="bg-white rounded-lg shadow p-5"
              >
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold">
                    {
                      appointment
                        .userId?.name
                    }
                  </h2>

                  <p>
                    📧{" "}
                    {
                      appointment
                        .userId?.email
                    }
                  </p>

                  <p>
                    📅{" "}
                    {
                      appointment
                        .slotId?.date
                    }
                  </p>

                  <p>
                    ⏰{" "}
                    {
                      appointment
                        .slotId
                        ?.startTime
                    }{" "}
                    -
                    {" "}
                    {
                      appointment
                        .slotId
                        ?.endTime
                    }
                  </p>

                  <p>
                    📝{" "}
                    {
                      appointment.notes
                    }
                  </p>

                  <p>
                    Status:
                    <span
                      className={`ml-2 font-semibold ${
                        appointment.status ===
                        "confirmed"
                          ? "text-green-600"
                          : appointment.status ===
                            "cancelled"
                          ? "text-red-600"
                          : "text-yellow-600"
                      }`}
                    >
                      {
                        appointment.status
                      }
                    </span>
                  </p>
                </div>

                {appointment.status !==
                  "confirmed" &&
                  appointment.status !==
                    "cancelled" && (
                    <button
                      onClick={() =>
                        confirmAppointment(
                          appointment._id
                        )
                      }
                      className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full"
                    >
                      Confirm Appointment
                    </button>
                  )}
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default AdminAppointment;
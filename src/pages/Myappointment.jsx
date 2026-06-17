import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

const MyAppointment = () => {
  const [
    appointments,
    setAppointments,
  ] = useState([]);

  const fetchAppointments =
    async () => {
      const { data } =
        await API.get(
          "/appointments/my"
        );

      setAppointments(
        data.appointments
      );
    };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const cancelAppointment =
    async (id) => {
      await API.delete(
        `/appointments/${id}`
      );

      fetchAppointments();
    };

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
            Date:
            {
              item.slotId
                ?.date
            }
          </p>

          <p>
            Time:
            {
              item.slotId
                ?.startTime
            }
          </p>

          <p>
            Status:
            {
              item.status
            }
          </p>

          {item.status !==
            "cancelled" && (
            <button
              onClick={() =>
                cancelAppointment(
                  item._id
                )
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
import { useEffect, useState } from "react";
import API from "../services/api";

const Homepage = () => {
  const [slots, setSlots] = useState([]);

  const fetchSlots = async () => {
    const { data } =
      await API.get("/slots");

    setSlots(data.slots);
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  const bookSlot = async (
    slotId
  ) => {
    try {
      await API.post(
        "/appointments/book",
        {
          slotId,
          notes:
            "Appointment Booking",
        }
      );

      alert(
        "Appointment Booked"
      );

      fetchSlots();
    } catch (error) {
      alert(
        error.response?.data
          ?.message
      );
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">
        Available Slots
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        {slots.map((slot) => (
          <div
            key={slot._id}
            className="bg-white p-4 rounded shadow"
          >
            <p>
              <strong>
                Date:
              </strong>{" "}
              {slot.date}
            </p>

            <p>
              {slot.startTime} -{" "}
              {slot.endTime}
            </p>

            <p>
              Status:{" "}
              {slot.status}
            </p>

            {slot.status ===
              "available" && (
              <button
                onClick={() =>
                  bookSlot(
                    slot._id
                  )
                }
                className="bg-blue-600 text-white px-3 py-2 mt-3 rounded"
              >
                Book
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
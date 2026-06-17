import { useEffect, useState } from "react";
import API from "../services/api";

const Homepage = () => {
  const [slots, setSlots] =
    useState([]);

  const fetchSlots = async () => {
    const { data } =
      await API.get("/slots");

    setSlots(data.slots || []);
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

      alert("Booked");

      fetchSlots();
    } catch (error) {
      alert(
        error.response?.data
          ?.message
      );
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">
        Available Slots
      </h1>

      {slots.length === 0 ? (
        <div className="bg-white p-6 rounded shadow">
          No Slots Available
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-5">
          {slots.map((slot) => (
            <div
              key={slot._id}
              className="bg-white p-5 rounded shadow"
            >
              <h3 className="font-bold">
                {slot.date}
              </h3>

              <p>
                {slot.startTime} -
                {slot.endTime}
              </p>

              <p>
                Status:
                <span className="ml-2">
                  {slot.status}
                </span>
              </p>

              {slot.status ===
                "available" && (
                <button
                  onClick={() =>
                    bookSlot(
                      slot._id
                    )
                  }
                  className="mt-3 bg-green-600 text-white px-4 py-2 rounded"
                >
                  Book Slot
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Homepage;
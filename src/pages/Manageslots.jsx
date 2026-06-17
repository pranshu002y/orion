import { useEffect, useState } from "react";
import API from "../services/api";
import CreateSlot from "../pages/CreateSlot";

const Manageslots = () => {
  const [slots, setSlots] =
    useState([]);

  const fetchSlots = async () => {
    const { data } =
      await API.get("/slots");

    setSlots(data.slots);
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  const deleteSlot = async (
    id
  ) => {
    await API.delete(
      `/slots/${id}`
    );

    fetchSlots();
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <CreateSlot
        refresh={fetchSlots}
      />

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Existing Slots
        </h2>

        {slots.map((slot) => (
          <div
            key={slot._id}
            className="bg-white p-4 rounded shadow flex justify-between mb-3"
          >
            <div>
              {slot.date}
              {" | "}
              {
                slot.startTime
              }{" "}
              -
              {
                slot.endTime
              }
            </div>

            <button
              onClick={() =>
                deleteSlot(
                  slot._id
                )
              }
              className="bg-red-600 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manageslots;
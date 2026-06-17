import {
  useEffect,
  useState,
} from "react";

import API from "../services/api";

const ManageSlots = () => {
  const [slots, setSlots] =
    useState([]);

  const [formData, setFormData] =
    useState({
      date: "",
      startTime: "",
      endTime: "",
    });

  const fetchSlots =
    async () => {
      const { data } =
        await API.get(
          "/slots"
        );

      setSlots(data.slots);
    };

  useEffect(() => {
    fetchSlots();
  }, []);

  const createSlot =
    async (e) => {
      e.preventDefault();

      await API.post(
        "/slots",
        formData
      );

      setFormData({
        date: "",
        startTime: "",
        endTime: "",
      });

      fetchSlots();
    };

  const deleteSlot =
    async (id) => {
      await API.delete(
        `/slots/${id}`
      );

      fetchSlots();
    };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">
        Manage Slots
      </h1>

      <form
        onSubmit={
          createSlot
        }
        className="bg-white p-5 rounded shadow mb-5"
      >
        <input
          type="date"
          className="border p-2 mr-2"
          value={
            formData.date
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              date:
                e.target
                  .value,
            })
          }
        />

        <input
          type="time"
          className="border p-2 mr-2"
          value={
            formData.startTime
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              startTime:
                e.target
                  .value,
            })
          }
        />

        <input
          type="time"
          className="border p-2 mr-2"
          value={
            formData.endTime
          }
          onChange={(e) =>
            setFormData({
              ...formData,
              endTime:
                e.target
                  .value,
            })
          }
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Create Slot
        </button>
      </form>

      {slots.map((slot) => (
        <div
          key={slot._id}
          className="bg-white p-4 rounded shadow mb-3 flex justify-between"
        >
          <div>
            {slot.date}
            {" | "}
            {
              slot.startTime
            }
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
  );
};

export default ManageSlots;
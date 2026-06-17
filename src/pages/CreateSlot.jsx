import { useState } from "react";
import API from "../services/api";

const CreateSlot = ({ refresh }) => {
  const [formData, setFormData] =
    useState({
      date: "",
      startTime: "",
      endTime: "",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/slots",
        formData
      );

      setFormData({
        date: "",
        startTime: "",
        endTime: "",
      });

      refresh();
    } catch (error) {
      alert(
        error.response?.data?.message
      );
    }
  };

  return (
    <div className="bg-white p-5 rounded shadow">
      <h2 className="text-xl font-bold mb-4">
        Create Slot
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-4 gap-3"
      >
        <input
          type="date"
          className="border p-2"
          value={formData.date}
          onChange={(e) =>
            setFormData({
              ...formData,
              date: e.target.value,
            })
          }
        />

        <input
          type="time"
          className="border p-2"
          value={formData.startTime}
          onChange={(e) =>
            setFormData({
              ...formData,
              startTime:
                e.target.value,
            })
          }
        />

        <input
          type="time"
          className="border p-2"
          value={formData.endTime}
          onChange={(e) =>
            setFormData({
              ...formData,
              endTime:
                e.target.value,
            })
          }
        />

        <button className="bg-blue-600 text-white rounded">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateSlot;
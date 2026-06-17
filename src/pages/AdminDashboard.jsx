import { useEffect, useState } from "react";
import API from "../services/api";

const AdminDashboard = () => {
  const [slots, setSlots] =
    useState([]);

  useEffect(() => {
    API.get("/slots").then(
      (res) =>
        setSlots(
          res.data.slots
        )
    );
  }, []);

  const booked =
    slots.filter(
      (slot) =>
        slot.status ===
        "booked"
    ).length;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded shadow">
          <h3>Total Slots</h3>
          <p className="text-3xl font-bold">
            {slots.length}
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3>Booked Slots</h3>
          <p className="text-3xl font-bold">
            {booked}
          </p>
        </div>

        <div className="bg-white p-6 rounded shadow">
          <h3>
            Available Slots
          </h3>
          <p className="text-3xl font-bold">
            {slots.length -
              booked}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
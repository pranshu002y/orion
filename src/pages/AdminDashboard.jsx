import {
  useEffect,
  useState,
} from "react";

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
      (s) =>
        s.status ===
        "booked"
    ).length;

  return (
    <div className="max-w-6xl mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-white p-5 shadow rounded">
          <h2>
            Total Slots
          </h2>

          <p className="text-3xl">
            {slots.length}
          </p>
        </div>

        <div className="bg-white p-5 shadow rounded">
          <h2>
            Booked Slots
          </h2>

          <p className="text-3xl">
            {booked}
          </p>
        </div>

        <div className="bg-white p-5 shadow rounded">
          <h2>
            Available Slots
          </h2>

          <p className="text-3xl">
            {slots.length -
              booked}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
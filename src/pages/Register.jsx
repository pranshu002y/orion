import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/auth/register",
        formData
      );

      alert("Registered Successfully");

      navigate("/login");
    } catch (error) {
      alert(
        error.response?.data?.message
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">
        Register
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          className="w-full border p-2 mb-3"
          placeholder="Name"
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value,
            })
          }
        />

        <input
          className="w-full border p-2 mb-3"
          placeholder="Email"
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value,
            })
          }
        />

        <input
          type="password"
          className="w-full border p-2 mb-3"
          placeholder="Password"
          onChange={(e) =>
            setFormData({
              ...formData,
              password:
                e.target.value,
            })
          }
        />

        <button className="bg-green-600 text-white w-full py-2 rounded">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
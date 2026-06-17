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
     <div
      className="min-h-screen bg-cover bg-center p-6 md:p-10"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=2000')",
      }}
    >
      <div className="min-h-[90vh] border-4 border-white/80 rounded-[40px] backdrop-blur-[5px] relative overflow-hidden">
      
       <div className="flex flex-col items-center text-center mt-10 px-4">
          <h1 className="text-6xl md:text-8xl font-bold leading-none">
            Find Your
            <br />
            Perfect <span className="text-yellow-200">Space</span>
          </h1>

          <p className="max-w-2xl mt-6 text-lg text-gray-700">
            Discover handpicked luxury cabins in breathtaking locations. Unplug,
            unwind, and reconnect with what matters most.
          </p>
        </div>
 <div className="flex justify-center mt-12 ">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200"
            alt="cabin"
            className="w-[700px] max-w-full object-contain rounded-[40px]"
          />
        </div>

<div className="absolute top-[48%] left-[25%]">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 px-5 py-3 rounded-full text-white">
            Wi-Fi 100 Mbps
          </div>
        </div>

        <div className="absolute top-[42%] right-[33%]">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 px-5 py-3 rounded-full text-white">
            Self Check-in
          </div>
        </div>

 <div className="absolute top-[55%] right-[20%]">
          <div className="bg-white/20 backdrop-blur-md border border-white/30 px-5 py-3 rounded-full text-white">
            Pet Friendly
          </div>
        </div>

        
        <div className="absolute bottom-40 left-10">
          <div className="w-32 h-32 rounded-full bg-white p-2 shadow-xl">
            <img
              src="https://maps.gstatic.com/tactile/basepage/pegman_sherlock.png"
              alt=""
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>
 <div className="absolute bottom-40 right-12 text-white text-right">
          <div className="text-6xl font-bold">★ 4.9</div>
          
        </div>


  
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-100 rounded-full shadow-xl">
          <div className=" md:grid-cols-2 gap-4 items-center p-3 m-3 backdrop-blur-[5px]">
      

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

        <button className="bg-green-600 text-white w-full py-2 rounded w-full">
          Register
        </button>
      </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Register;
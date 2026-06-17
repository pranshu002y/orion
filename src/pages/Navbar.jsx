import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from "../utils/auth";

const Navbar = () => {
  const user = getUser();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();             
    setOpen(false);       
    navigate("/", { replace: true }); 
  };

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-blue-600">
          ORION
        </h1>

        {/* Hamburger Button */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <div className="hidden sm:flex gap-6 items-center">
          {user && (
            <>
              <Link to="/">Dashboard</Link>
              <Link to="/appointments">My Appointments</Link>

              {user.role === "admin" && (
                <>
                  <Link to="/admin">Admin Dashboard</Link>
                  <Link to="/admin/appointments">Appointments</Link>
                  <Link to="/slots">Manage Slots</Link>
                </>
              )}

              <button onClick={handleLogout} className="text-red-600">
                Logout
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="sm:hidden px-4 pb-4 flex flex-col gap-3 bg-white border-t">
          {user && (
            <>
              <Link onClick={() => setOpen(false)} to="/">
                Dashboard
              </Link>

              <Link onClick={() => setOpen(false)} to="/appointments">
                My Appointments
              </Link>

              {user.role === "admin" && (
                <>
                  <Link onClick={() => setOpen(false)} to="/admin">
                    Admin Dashboard
                  </Link>

                  <Link
                    onClick={() => setOpen(false)}
                    to="/admin/appointments"
                  >
                    Appointments
                  </Link>

                  <Link onClick={() => setOpen(false)} to="/slots">
                    Manage Slots
                  </Link>
                </>
              )}

              <button onClick={handleLogout} className="text-left text-red-600">
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
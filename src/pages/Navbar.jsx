import { Link } from "react-router-dom";
import { getUser, logout } from "../utils/auth";

const Navbar = () => {
  const user = getUser();

  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          ORION
        </h1>

        <div className="flex gap-6">
          {user && (
            <>
              <Link to="/">Dashboard</Link>

              <Link to="/appointments">
                My Appointments
              </Link>

              {user.role === "admin" && (
                <>
                  <Link to="/admin">
                    Admin Dashboard
                  </Link>

                  <Link to="/admin/appointments">
  Appointments
</Link>

                  <Link to="/slots">
                    Manage Slots
                  </Link>
                </>
              )}

              <button onClick={logout}>
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
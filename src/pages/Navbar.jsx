import { Link } from "react-router-dom";

import {
  getUser,
  logout,
} from "../utils/auth";

const Navbar = () => {
  const user = getUser();

  return (
     <nav className="flex justify-between items-center px-8 md:px-12 py-8">
     <div className="flex items-center gap-3">
       <div className="w-5 h-5 rounded-full bg-yellow-300"></div>
        <Link
          to="/"
         className="font-bold text-xl"
        >
          ORION
        </Link>

        <div className="flex gap-4">
          {user ? (
            <>
              <Link to="/">
                Dashboard
              </Link>

              <Link to="/appointments">
                My Appointments
              </Link>

              {user.role ===
                "admin" && (
                <>
                  <Link to="/admin">
                    Admin
                  </Link>

                  <Link to="/slots">
                    Slots
                  </Link>
                </>
              )}

              <button
                onClick={logout}
                className="cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login">
                Login
              </Link>

              <Link to="/register">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
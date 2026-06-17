import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./pages/Navbar";

import ProtectedRoute from "./utils/ProtectedRoutes";

import AdminRoute from "./utils/AdminRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Homepage";
import MyAppointments from "./pages/Myappointment";
import AdminDashboard from "./pages/AdminDashboard";
import ManageSlots from "./pages/Myappointment";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/appointments"
          element={
            <ProtectedRoute>
              <MyAppointments />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/slots"
          element={
            <AdminRoute>
              <ManageSlots />
            </AdminRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
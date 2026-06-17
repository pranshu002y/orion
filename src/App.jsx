import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "../src/pages/Navbar";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyAppointments from "../src/pages/Myappointment";
import AdminDashboard from "../src/pages/AdminDashboard";
import ManageSlots from "../src/pages/Manageslots";

import ProtectedRoute from "../src/utils/ProtectedRoutes";
import AdminRoute from "../src/utils/AdminRoute";
import AdminAppointment from "./pages/Adminappointment";

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
              <Homepage />
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

        <Route
  path="/admin/appointments"
  element={
    <AdminRoute>
      <AdminAppointment />
    </AdminRoute>
  }
/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
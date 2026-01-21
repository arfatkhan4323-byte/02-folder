import { BrowserRouter, Routes, Route } from "react-router-dom"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Warehouse from "./pages/Warehouse"
import ProtectedRoute from "./components/ProtectedRoute"
import { AuthProvider } from "./context/AuthContext"

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/warehouse"
            element={
              <ProtectedRoute>
                <Warehouse />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App

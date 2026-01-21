import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Sidebar = () => {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-8">Dynamics</h1>

      <nav className="space-y-4">
        <NavLink to="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </NavLink>
        <NavLink to="/warehouse" className="block hover:text-blue-400">
          Warehouse
        </NavLink>
        <button
          onClick={handleLogout}
          className="mt-6 text-red-400 hover:text-red-500"
        >
          Logout
        </button>
      </nav>
    </aside>
  )
}

export default Sidebar;

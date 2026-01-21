import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Warehouse = () => {
  const [warehouses, setWarehouses] = useState([])
  const [form, setForm] = useState({name: "", location: "" })

  const handleAdd = () => {
    if (!form.name || !form.location) return

     setWarehouses([
      ...warehouses,
      { id: Date.now(), ...form }
    ])
    setForm({ name: "", location: "" })
  }

  const handleDelete = (id) => {
    setWarehouses(warehouses.filter(w => w.id !== id))
  } 

  return (
    <div className="flex">
      <Sidebar />

      <main className="flex-1 p-10 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-6">Warehouse Management</h1>

        <div className="bg-white p-6 rounded shadow mb-6  flex gap-4">
          <input
          placeholder="warehouse Name"
          className="border p-2 rounded w-1/3"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          />

          <input 
          placeholder="Location"
          className="border p-2 rounded w-1/3"
          value={form.location}
          onChange={(e) =>
            setForm({ ...form, location: e.target.value})
          } 
          />

          <button onClick={handleAdd} className="bg-blue-600 text-white px-6 rounded">
            Add
          </button>
        </div>
           <div className="bg-white rounded shadow">
           {warehouses.map(w => (
            <div key={w.id}
            className="flex justify-between p-4 border-b">
             <div>
              <p className="font-semibold">{w.name}</p>
              <p className="text-sm text-gray-500">{w.location}</p>
             </div>

             <button 
             onClick={() => handleDelete(w.id)}
             className="text-red-500">
              Delete
             </button>
            </div>
           )

           )}
        </div>

      </main>
    </div>
  )
}

export default Warehouse;
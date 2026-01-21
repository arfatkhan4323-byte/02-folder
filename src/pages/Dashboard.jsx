import Sidebar from "../components/Sidebar";
import { useAuth } from "../context/AuthContext";



const Dashboard = () => {
  const { user } = useAuth(); 

  return (
    <div className="flex">
   
      <Sidebar />

     <main className="flex-1 p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">
        Welcome {user.email}
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded shadow">Warehouse: 4</div>
        <div className="bg-white p-6 rounded shadow">Product: 120</div>
        <div className="bg-white p-6 rounded shadow">user: 3</div>
        <div className="bg-white p-6 rounded shadow">Warehouse: 5</div>
        <div className="bg-white p-6 rounded shadow">Product: 121</div>
        <div className="bg-white p-6 rounded shadow">user: 4</div>
      </div>
     </main>
    </div>
  );
}

export default Dashboard;

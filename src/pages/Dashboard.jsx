import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Warehouse from "./Warehouse";

function Dashboard() {
  const [page, setPage] = useState("dashboard"); 

  return (
    <div style={{ display: "flex" }}>
   
      <Sidebar setPage={setPage} />

     
      <div style={{ padding: "20px", width: "100%" }}>
        {page === "dashboard" && (
          <>
            <h2>Dashboard</h2>
            <p>Welcome to dashboard</p>
          </>
        )}

        {page === "warehouse" && <Warehouse />}
      </div>
    </div>
  );
}

export default Dashboard;

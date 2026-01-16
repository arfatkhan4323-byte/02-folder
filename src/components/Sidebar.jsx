import { useState } from "react";

function Sidebar({ setPage }) {
    return (
    <div style={{ width: "200px", background: "#eee", padding: "20px"}}>
        <p style={{ cursor: "pointer"}} onClick={() => setPage("dashboard")}>
            Dashboard
        </p>
        <p style={{ cursor: "pointer"}} onClick={() => setPage("warehouse")}>Warehouse</p>
        
        <p style={{ cursor: "pointer" }} onClick={() => alert("Logout logic")}>
        Logout
      </p>

    </div>
    );
}

export default Sidebar;
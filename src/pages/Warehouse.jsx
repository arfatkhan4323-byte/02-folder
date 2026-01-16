import { useState, useEffect } from "react";

function Warehouse() {
  const [warehouses, setWarehouses] = useState([]);
  const [name, setName] = useState(""); 
  const [city, setCity] = useState("");  

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("warehouses")) || [];
    setWarehouses(saved);
  }, []);

  const saveToStorage = (data) => {
    localStorage.setItem("warehouses", JSON.stringify(data));
    setWarehouses(data);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !city) {
      alert("Please fill all fields");
      return;
    }

    const newWarehouse = { name, city }; 

    const updated = [...warehouses, newWarehouse];
    saveToStorage(updated);
    setName("");
    setCity("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Warehouse</h2>

      <form onSubmit={handleAdd}>
        <input
          placeholder="Warehouse Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Warehouse;

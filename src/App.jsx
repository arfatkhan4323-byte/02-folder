import { useState} from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Warehouse from "./pages/Warehouse";
import "./index.css";

function App() {
  
  const [page, setPage] = useState("login");
  const [isAuth, setIsAuth] = useState(false);

  if (isAuth) {
    return <Dashboard />
  }

  return (
       <>
     {page === "login" && (
       <Login 
       onLogin={() => setIsAuth(true)}
       onSwitch={() => setPage("register")}
       />
      )}

       {page === "register" && (
        <Register 
        onSwitch={() => setPage("login")}/>
       )}
     
     </>

      );
  };


export default App;

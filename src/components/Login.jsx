import { useState } from "react";

function Login ({onLogin, onSwitch}) {
    const [email, setEmail] = useState ("");    
    const [password, setPassword] = useState ("");

    const handlelogin = (e) => {
    e.preventDefault();
   
    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      onLogin();
    } else {
      alert("Invalid credentials");
    }
    };

  return (
    <div className="container">
        <h2>Login</h2>

        <form onSubmit={handlelogin}>
            <input
            type="emial"
            placeholder="Email"
            onChange={(e) => setEmail (e.target.value)}
            />

            <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword (e.target.value)}/>

            <button type="submit">Login </button>
        </form>

        
      <p onClick={onSwitch} style={{cursor: "pointer", color: "blue"}}>
          Create new account
      </p>


    </div>
  )

}

export default Login;
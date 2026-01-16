import { useState} from "react";

function Register ({onSwitch}) {
  const [name, setName] = useState ("");
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");

  const handleRegister = (e) => {
    e.preventDefault();

    const user =  { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Register successfull");
    onSwitch();
  };

  return (
    <div className="container">
      <h2>Register</h2>

    <form onSubmit={handleRegister}>
      <input
      placeholder="Name"
      onChange={(e) => setName (e.target.value)}
      /> 

      <input 
      type="emil"
      placeholder="Email"
      onChange={(e) => setEmail (e.target.value)} 
      />

      <input 
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword (e.target.value)} 
      />

      <button type="Submit">
       Register
      </button>
      </form>  

      <p onClick={onSwitch} style={{cursor: "pointer"}}>
        Already have an account? Login
      </p>
    
    </div>
  )
}

export default Register;
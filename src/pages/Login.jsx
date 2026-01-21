import { useState } from "react";
import { useNavigate, Link} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
   const [email, setEmail] = useState("")
   const [ password, setPassword] = useState("")
   const { login } = useAuth()
   const navigate = useNavigate()


   const handleSubmit = (e) => {
    e.preventDefault()
    if (email  && password) {
      login(email)
      navigate("/dashboard")
    }

   }

  
return (
    <div className="min-h-screen flex items-center justify-center bg-red-600">
       

        <form onSubmit={handleSubmit} 
        className="bg-white p-8 rounded-xl shadow-lg w-96"
        >

          <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>


            <input
            type="emial"
            placeholder="Email"
            className="w-full mb-4 p-3 border-rouded"
            onChange={(e) => setEmail (e.target.value)}
            />

            <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 border-rounded"
            onChange={(e) => setPassword (e.target.value)}/>

            <button className="w-full bg-blue-600 text-white py-3 rounded">Login </button>
        

        
      <p className="text-sm text-center mt-4">
        No account?{" "}
        <Link to="/register" className="text-blue-600">
        register
        </Link>
      </p>
      </form>

    </div>
  )

}

export default Login;
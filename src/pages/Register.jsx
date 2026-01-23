import { Link } from "react-router-dom";

const Register = () => {
    return (
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-8 rounded-xl shadow-lg w-96">
    <h1 className="text-2xl font-bold text-center mb-6">Create Account</h1>

    <input type="text"
    placeholder="Full Name"
    className="w-full mb-4 p-3 border rounded" />

    <input type="emal" 
    placeholder="Email"
    className="w-full mb-4 p-3 border rounded"/>

    <input type="password" 
    placeholder=" 🔑 Password"
    className="w-full mb-4 p-3 border rounded"/>

   <button className="w-full bg-blue-600 text-white py-3 rounded">Register</button>

    <p className="text-sm text-center mt-4">Already Have an Account?{" "}
        <Link to="/" className="text-blue-600 font-medium">
        Login
        </Link>
    </p>
    </div>
   </div>
    )
} 

export default Register;
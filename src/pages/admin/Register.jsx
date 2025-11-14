import React, { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    try {
      await api.post("/auth/register", { email, password });
      alert("Admin registered successfully!");
      navigate("/admin"); // redirect to login
    } catch (err) {
      alert(err.response?.data?.msg || "Registration failed");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold">Register Admin</h2>

      <form onSubmit={handleRegister} className="mt-4 space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e)=> setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          value={password}
          onChange={(e)=> setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border rounded"
        />

        <input
          type="password"
          value={confirm}
          onChange={(e)=> setConfirm(e.target.value)}
          placeholder="Confirm Password"
          className="w-full p-2 border rounded"
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Register Admin
        </button>
      </form>

      <div className="mt-3 text-sm">
        Already have an account?  
        <span onClick={()=> navigate("/admin")} className="text-blue-600 cursor-pointer ml-1">
          Login
        </span>
      </div>
    </div>
  );
}

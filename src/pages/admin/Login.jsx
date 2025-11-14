import React, { useState } from "react";
import { adminLogin } from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const res = await adminLogin({ email, password });
      
        if (!res || !res.token) {
          alert("Invalid credentials");
          return;
        }
      
        localStorage.setItem("dg_token", res.token);
        navigate("/admin/dashboard");
      
      } catch (err) {
        alert(err.response?.data?.msg || "Login failed");
      }
    setLoading(false);
    }
     

  return (
    <div className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold">Admin Login</h2>

      <form onSubmit={submit} className="mt-4 space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-2 border rounded"
          required
        />

        <button
          disabled={loading}
          className="bg-green-600 text-white px-4 py-2 rounded w-full"
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}

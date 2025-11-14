import React from "react";
import { Navigate } from "react-router-dom";

export default function AdminProtected({ children }) {
  const token = localStorage.getItem("dg_token");
  if (!token) return <Navigate to="/admin" replace />;
  return children;
}

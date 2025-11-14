import React from "react";
import { Route, Routes } from "react-router-dom";

// Layout
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Public Pages
import Home from "./pages/Home";
import Wellness from "./pages/Wellness";
import FreshG from "./pages/FreshG";
import Retirees from "./pages/Retirees";
import Cooperates from "./pages/Cooperates";
import About from "./pages/About";
import Mentorship from "./pages/Mentorship";
import Shop from "./pages/Shop";
import ContactPage from "./pages/Contact";

// Admin Pages


// Protection HOC

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import AdminProtected from "./pages/admin/AdminProtected";
import Register from "./pages/admin/Register";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>

          {/* Public Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/wellness" element={<Wellness />} />
          <Route path="/freshgrad" element={<FreshG />} />
          <Route path="/retirees" element={<Retirees />} />
          <Route path="/corporates" element={<Cooperates />} />
          <Route path="/about" element={<About />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />


          {/* Protected Dashboard */}
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/register" element={<Register />} />
          <Route 
            path="/admin/dashboard" 
            element={
              <AdminProtected>
                <Dashboard />
              </AdminProtected>
            }
          />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import MKWebStudio from "./components/mkwebstudio";
import LibraryManagement from "./components/library-management";
// 🏠 Home Page Component
function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </>
  );
}


function App() {

  // 🔌 Backend connection
  useEffect(() => {
    const BASE_URL =
      import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

    fetch(`${BASE_URL}/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(
          "✅ Backend connected successfully:",
          data
        );
      })
      .catch((err) => {
        console.error(
          "❌ Backend connection failed:",
          err
        );
      });
  }, []);


  return (
    <div className="app">

      <BrowserRouter>

        <Routes>

          {/* 📑 Main Portfolio */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* 🔐 Admin Login */}
          <Route
            path="/admin/login"
            element={<AdminLogin />}
          />
            <Route
              path="/projects/mk-web-studio"
              element={<MKWebStudio />}
           />
            <Route
              path="/projects/library-management"
              element={<LibraryManagement />}
           />


          {/* 🛡️ Protected Admin Dashboard */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

        </Routes>

      </BrowserRouter>

    </div>
  );
}


export default App;

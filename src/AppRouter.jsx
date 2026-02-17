import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import App from "./components/App";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import { checkToken } from "@/utils/auth";

function AppRouter() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      // Validar el token con el backend
      checkToken(token)
        .then((res) => {
          // Extraer email del objeto data de la respuesta
          const email =
            res?.data?.email || localStorage.getItem("userEmail") || "";
          setUserEmail(email);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          // Token inválido o expirado: limpiar localStorage y redirigir
          console.error("Token validation failed:", err);
          localStorage.removeItem("jwt");
          localStorage.removeItem("userEmail");
          setIsLoggedIn(false);
          setUserEmail("");
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(false);
    }
  }, []);
  function handleLogin(token, email) {
    if (token) {
      localStorage.setItem("jwt", token);
      localStorage.setItem("userEmail", email);
      setIsLoggedIn(true);
      setUserEmail(email);
    }
  }
  function handleLogout() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
  }
  // Mostrar un loader mientras se valida el token
  if (isLoading) {
    return <div>Cargando...</div>;
  }
  return (
    <BrowserRouter>
      <div className="page">
        <Header
          isLoggedIn={isLoggedIn}
          userEmail={userEmail}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route path="/signup" element={<Register />} />
          <Route
            path="/"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <App onSignOut={handleLogout} />
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? "/" : "/signin"} replace />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default AppRouter;

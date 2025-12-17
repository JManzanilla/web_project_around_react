import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "@/utils/auth";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await register(email, password);
      setIsSuccess(true);
      setTooltipMessage("¡Registro exitoso! Redirigiendo a iniciar sesión...");
      setTooltipOpen(true);
      setTimeout(() => navigate("/signin"), 2000);
    } catch (err) {
      setIsSuccess(false);
      setTooltipMessage(err?.toString() || "Error al registrar");
      setTooltipOpen(true);
    }
  }

  return (
    <>
      <div className="auth-page">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Contraseña
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          <button type="submit">Registrarse</button>
        </form>
      </div>
      <InfoTooltip
        isOpen={tooltipOpen}
        onClose={() => setTooltipOpen(false)}
        isSuccess={isSuccess}
        message={tooltipMessage}
      />
    </>
  );
}

export default Register;

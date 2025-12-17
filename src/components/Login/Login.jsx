import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authorize } from "@/utils/auth";
import InfoTooltip from "../InfoTooltip/InfoTooltip";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await authorize(email, password);
      // La respuesta de TripleTen es { token }
      const token = res?.token;
      if (token) {
        onLogin(token, email);
        navigate("/");
      } else {
        setIsSuccess(false);
        setTooltipMessage("Inicio de sesión fallido: token no recibido");
        setTooltipOpen(true);
      }
    } catch (err) {
      setIsSuccess(false);
      setTooltipMessage(err?.toString() || "Error de red");
      setTooltipOpen(true);
    }
  }

  return (
    <>
      <div className="auth-page">
        <h2>Iniciar sesión</h2>
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
          <button type="submit">Entrar</button>
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

export default Login;

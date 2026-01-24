import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "./../../utils/auth";
import InfoTooltip from "./../InfoTooltip/InfoTooltip";
import successImage from "./../../images/success.png";
import errorImage from "./../../images/error.png";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [tooltipMessage, setTooltipMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }
    try {
      await register(email, password);
      setIsSuccess(true);
      setTooltipMessage("¡Registro exitoso! Redirigiendo a iniciar sesión...");
      setTooltipOpen(true);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => navigate("/signin"), 2000);
    } catch (err) {
      setIsSuccess(false);
      setTooltipMessage(err?.toString() || "Error al registrar");
      setTooltipOpen(true);
    }
  }

  return (
    <>
      <div className="login">
        <h2 className="login__title">Registrate</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <input
            className="login__input"
            value={email}
            placeholder="Correo Electronico"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="login__input"
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            className="login__input"
            type="password"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <button className="login__button" type="submit">
            Registrarse
          </button>
        </form>
      </div>
      <InfoTooltip
        isOpen={tooltipOpen}
        onClose={() => setTooltipOpen(false)}
        isSuccess={isSuccess}
        message={tooltipMessage}
        image={isSuccess ? successImage : errorImage}
      />
    </>
  );
}

export default Register;

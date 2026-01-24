import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authorize } from "./../../utils/auth";
import InfoTooltip from "./../InfoTooltip/InfoTooltip";
import successImage from "./../../images/success.png";
import errorImage from "./../../images/error.png";

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
        setIsSuccess(true);
        setTooltipMessage("¡Inicio de sesión exitoso!");
        setTooltipOpen(true);
        setTimeout(() => navigate("/"), 1500);
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
      <div className="login">
        <h2 className="login__title">Iniciar sesión</h2>
        <form className="login__form" onSubmit={handleSubmit}>
          <fieldset className="login__form-fieldset">
            <input
              placeholder="Correo electrónico"
              className="login__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              className="login__input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button className="login__button" type="submit">
              Iniciar Seción
            </button>
          </fieldset>
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
export default Login;

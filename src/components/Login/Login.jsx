import { Link } from "react-router-dom";
import { useState } from "react";
import Logo from "./Logo";
import "./styles/Login.css";

const Login = ({ handleLogin }) => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(data);
  };

  return (
    <div className="login">
      <Logo title={"CryptoDucks"} />
      <p className="login__welcome">
        Esta aplicación contiene información confidencial. Por favor inicia
        sesión o regístrate para acceder a CryptoDucks.
      </p>
      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          <Email></Email>:
        </label>
        <input
          id="email"
          required
          name="email"
          type="text"
          value={data.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Contraseña:</label>
        <input
          id="password"
          required
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
        />
        <div className="login__button-container">
          <button type="submit" className="login__link">
            Iniciar sesión
          </button>
        </div>
      </form>

      <div className="login__signup">
        <p>¿Aún no eres miembro?</p>
        <Link to="/register" className="signup__link">
          Regístrate aquí
        </Link>
      </div>
    </div>
  );
};

export default Login;

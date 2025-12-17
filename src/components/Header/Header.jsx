import { useLocation, useNavigate } from "react-router-dom";
import headerLogo from "@images/logo.svg";

function Header({ isLoggedIn, userEmail, onLogout }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage =
    location.pathname === "/signin" || location.pathname === "/signup";

  return (
    <header className="header">
      <img src={headerLogo} alt="logo de Around" className="header__logo" />
      {isAuthPage && (
        <nav className="header__nav">
          {location.pathname === "/signin" ? (
            <p className="header__auth-text">
              ¿Aún no eres miembro?{" "}
              <button
                className="header__link"
                onClick={() => navigate("/signup")}
              >
                Regístrate aquí
              </button>
            </p>
          ) : (
            <p className="header__auth-text">
              ¿Ya eres miembro?{" "}
              <button
                className="header__link"
                onClick={() => navigate("/signin")}
              >
                Inicia sesión aquí
              </button>
            </p>
          )}
        </nav>
      )}
      {isLoggedIn && (
        <nav className="header__nav">
          <p className="header__email">{userEmail}</p>
          <button className="header__logout-btn" onClick={onLogout}>
            Cerrar sesión
          </button>
        </nav>
      )}
    </header>
  );
}

export default Header;

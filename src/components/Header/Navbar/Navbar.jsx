import { NavLink, useNavigate } from "react-router-dom";
import { removeToken } from "../utils/token";
import headerLogo from "../../images/logo.svg";
import "./styles/NavBar.css";
import AppContext from "../context/ApiContext";
import { useContext } from "react";
import { Api } from "../../../utils/Api";

function NavBar() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);

  function signOut() {
    removeToken();
    navigate("/login");

    setIsLoggedIn(false);
  }
  return (
    <ApiContext.Provider>
    <div className="navbar">
      <div className="navbar__logo">
        <img src={headerLogo} alt="logo de Around" className="header__logo" />
      </div>
      <ul className="navbar__nav">
        <li>
          <NavLink to="/" className="navbar__link">
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to="/my-profile" className="navbar__link">
            Mi perfil
          </NavLink>
        </li>
        <li>
          <button onClick={signOut} className="navbar__link navbar__button">
            Cerrar sesión
          </button>
        </li>
      </ul>
    </div>
    </ApiContext.Provider>
  );
}

export default NavBar;

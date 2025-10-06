import lapiz from "../../../../images/lapiz.png";
import cruz from "../../../../images/cruz.png";
import NewCard from "../Popup/NewCard/NewCard";
import EditProfile from "../Popup/EditProfile/EditProfile";
import EditAvatar from "../Popup/EditAvatar/EditAvatar";
import { useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

function Profile({ onHandleOpenPopup, onAddPlaceSubmit }) {
  const { currentUser } = useContext(CurrentUserContext);
  const newCardPopup = {
    title: "Nuevo lugar",
    children: <NewCard onAddPlaceSubmit={onAddPlaceSubmit} />,
  };
  const editProfile = { title: "Editar perfil", children: <EditProfile /> };
  const avatar = { title: "Cambiar Foto de perfil", children: <EditAvatar /> };
  return (
    <section className="profile">
      <div className="profile__content">
        <div className="profile__image-container">
          <img
            src={currentUser?.avatar || " "}
            alt="foto de perfil"
            className="profile__image"
          />
          <button
            type="button"
            className="profile__avatar-edit-button"
            id="profile__image-button-action"
            onClick={() => onHandleOpenPopup(avatar)}
          >
            <img
              src={lapiz}
              alt="icono de lapiz para editar foto de perfil"
              className="profile__avatar-edit-button-image"
            />
          </button>
        </div>
        <div>
          <h2 className="profile__title">
            {currentUser?.name || "Cargando.."}
          </h2>
          <p className="profile__title-content">
            {currentUser?.about || "Cargando..."}
          </p>
        </div>
        <button
          type="button"
          className="profile__lapiz"
          id="profile__lapiz-action-add"
          onClick={() => onHandleOpenPopup(editProfile)}
        >
          <img src={lapiz} alt="Lapiz para deditar perfil" />
        </button>
        <button
          type="button"
          className="profile__cruz"
          onClick={() => onHandleOpenPopup(newCardPopup)}
        >
          <img
            src={cruz}
            alt="cruz para agregar imagenes"
            className="profile__cruz-logo"
          />
        </button>
      </div>
    </section>
  );
}

export default Profile;

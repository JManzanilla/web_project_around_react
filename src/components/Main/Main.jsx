import lapiz from "../../images/lapiz.png";
import cruz from "../../images/cruz.png";
import Card from "./components/Card/Card";
import EditProfile from "./components/Popup/EditProfile/EditProfile";
import NewCard from "./components/Card/Card";
import Avatar from "./components/Popup/Avatar/Avatar";
import ImagePopup from "./components/Popup/ImagePopup/ImagePopup";
import RemoveCard from "./components/Popup/RemoveCard/RemoveCard";

function Main() {
  return (
    <>
      <main className="main">
        <section className="profile">
          <div className="profile__content">
            <div className="profile__image-container">
              <img src=" " alt="foto de perfil" className="profile__image" />
              <button
                type="button"
                className="profile__avatar-edit-button"
                id="profile__image-button-action"
              >
                <img
                  src={lapiz}
                  alt="icono de lapiz para editar foto de perfil"
                  className="profile__avatar-edit-button-image"
                />
              </button>
            </div>
            <div>
              <h2 className="profile__title">Cargando..</h2>
              <p className="profile__title-content">Cargando...</p>
            </div>
            <button
              type="button"
              className="profile__lapiz"
              id="profile__lapiz-action-add"
            >
              <img src={lapiz} alt="logo de lapiz" />
            </button>
            <button type="button" className="profile__cruz">
              <img
                src={cruz}
                alt="cruz para agregar imagenes"
                className="profile__cruz-logo"
              />
            </button>
          </div>
        </section>
        <section className="element">
          <div className="container">
            <div className="container__loader">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>
          </div>
          <Card />
        </section>
        <EditProfile />
        <NewCard />
        <Avatar />
        <ImagePopup />
        <RemoveCard />
      </main>
    </>
  );
}

export default Main;

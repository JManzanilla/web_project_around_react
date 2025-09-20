import Equis from "@images/equis.png";
function EditProfile() {
  return (
    <>
      <div className="popup" id="popup__profile">
        <div className="popup__container">
          <h3 className="popup__container-title">Editar perfil</h3>
          <form
            className="popup__form"
            id="popup__form-profile"
            name="profile-form"
            novalidate
          >
            <fieldset className="popup__form-fieldset">
              <input
                type="text"
                id="popup__form-name"
                className="popup__form-input popup__input"
                name="name"
                placeholder="Nombre"
                required
                minlength="2"
                maxlength="40"
              />
              <span className="popup__error" id="popup__form-name-error"></span>
              <input
                type="text"
                id="popup__form-about"
                className="popup__form-input popup__input"
                name="about"
                placeholder="Acerca de mi"
                required
                minlength="4"
                maxlength="30"
              />
              <span
                className="popup__error"
                id="popup__form-about-error"
              ></span>
              <button
                type="submit"
                className="popup__form-btn-submit popup__form-btn-submit-disable"
              >
                Guardar
              </button>
            </fieldset>
          </form>
          <button type="button" className="popup__container-btn-close">
            <img
              src={Equis}
              alt="Equis para cerrar la ventana"
              className="popup__form-btn-close-image"
              id="popup__form_btn-close-image"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default EditProfile;

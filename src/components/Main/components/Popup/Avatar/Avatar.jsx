import Equis from "@images/equis.png";
function Avatar() {
  return (
    <>
      <div className="popup" id="popup__profile-image">
        <div className="popup__container">
          <h3 className="popup__container-title">Cambiar foto de perfil</h3>
          <form
            className="popup__form"
            id="popup__form-profile-image"
            name="profile-image-form"
            novalidate
          >
            <fieldset className="popup__form-fieldset">
              <input
                type="url"
                id="popup__form-profile-image-url"
                class="popup__form-input popup__input"
                name="profile-image"
                placeholder="Enlace a la imagen de perfil"
                required
              />
              <span
                className="popup__error"
                id="popup__form-profile-image-url-error"
              ></span>
              <button
                type="submit"
                className="popup__form-btn-submit .popup__form-btn-submit-disable"
              >
                Guardar
              </button>
            </fieldset>
          </form>
          <button type="button" class="popup__container-btn-close">
            <img
              src={Equis}
              alt="cerrar ventana"
              className="popup__form-btn-close-image"
              id="popup__form_btn-close-image"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Avatar;

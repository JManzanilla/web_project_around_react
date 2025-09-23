function Avatar() {
  return (
    <form
      class="popup__form"
      id="popup__form-profile-image"
      name="profile-image-form"
      novalidate
    >
      <fieldset class="popup__form-fieldset">
        <input
          type="url"
          id="popup__form-profile-image-url"
          class="popup__form-input popup__input"
          name="profile-image"
          placeholder="Enlace a la imagen de perfil"
          required
        />
        <span
          class="popup__error"
          id="popup__form-profile-image-url-error"
        ></span>
        <button
          type="submit"
          class="popup__form-btn-submit .popup__form-btn-submit-disable"
        >
          Guardar
        </button>
      </fieldset>
    </form>
  );
}

export default Avatar;

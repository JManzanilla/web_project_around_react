function EditProfile() {
  return (
    <form
      class="popup__form"
      id="popup__form-profile"
      name="profile-form"
      novalidate
    >
      <fieldset class="popup__form-fieldset">
        <input
          type="text"
          id="popup__form-name"
          class="popup__form-input popup__input"
          name="name"
          placeholder="Nombre"
          required
          minlength="2"
          maxlength="40"
        />
        <span class="popup__error" id="popup__form-name-error"></span>
        <input
          type="text"
          id="popup__form-about"
          class="popup__form-input popup__input"
          name="about"
          placeholder="Acerca de mi"
          required
          minlength="4"
          maxlength="30"
        />
        <span class="popup__error" id="popup__form-about-error"></span>
        <button
          type="submit"
          class="popup__form-btn-submit popup__form-btn-submit-disable"
        >
          Guardar
        </button>
      </fieldset>
    </form>
  );
}

export default EditProfile;

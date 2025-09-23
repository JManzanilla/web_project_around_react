export default function NewCard() {
  return (
    <form
      class="popup__form"
      id="popup__form-image"
      name="image-form"
      novalidate
    >
      <fieldset class="popup__form-fieldset">
        <input
          type="text"
          id="popup__form-title"
          class="popup__form-input popup__input"
          name="title"
          placeholder="Título"
          required
          minlength="4"
          maxlength="30"
        />
        <span class="popup__error" id="popup__form-title-error"></span>
        <input
          type="url"
          id="popup__form-image-url"
          class="popup__form-input popup__input"
          name="image"
          placeholder="Enlace a la imagen"
          required
        />
        <span class="popup__error" id="popup__form-image-url-error"></span>
        <button
          type="submit"
          class="popup__form-btn-submit popup__form-btn-submit-disable"
        >
          Crear
        </button>
      </fieldset>
    </form>
  );
}

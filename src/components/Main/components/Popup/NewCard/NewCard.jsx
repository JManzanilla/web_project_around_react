import { useState } from "react";

export default function NewCard({ onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (onAddPlaceSubmit) onAddPlaceSubmit({ name, link });
    setName("");
    setLink("");
  }

  return (
    <form
      className="popup__form"
      id="popup__form-image"
      name="image-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__form-fieldset">
        <input
          type="text"
          id="popup__form-title"
          className="popup__form-input popup__input"
          name="title"
          placeholder="Título"
          required
          minLength={4}
          maxLength={30}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="popup__error" id="popup__form-title-error"></span>
        <input
          type="url"
          id="popup__form-image-url"
          className="popup__form-input popup__input"
          name="image"
          placeholder="Enlace a la imagen"
          required
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <span className="popup__error" id="popup__form-image-url-error"></span>
        <button type="submit" className="popup__form-btn-submit">
          Crear
        </button>
      </fieldset>
    </form>
  );
}

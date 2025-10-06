import { useRef, useContext, useState } from "react";
import CurrentUserContext from "@/contexts/CurrentUserContext";

function Avatar() {
  const inputRef = useRef(null);
  const { handleUpdateAvatar } = useContext(CurrentUserContext);
  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!inputRef.current) return;
    const avatar = inputRef.current.value;
    setIsSaving(true);
    try {
      await handleUpdateAvatar({ avatar });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form
      className="popup__form"
      id="popup__form-profile-image"
      name="profile-image-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__form-fieldset">
        <input
          ref={inputRef}
          type="url"
          id="popup__form-profile-image-url"
          className="popup__form-input popup__input"
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
          className="popup__form-btn-submit"
          disabled={isSaving}
        >
          {isSaving ? "Guardando..." : "Guardar"}
        </button>
      </fieldset>
    </form>
  );
}

export default Avatar;

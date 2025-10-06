import { useState, useContext, useEffect } from "react";
import CurrentUserContext from "@/contexts/CurrentUserContext";

function EditProfile() {
  const { currentUser } = useContext(CurrentUserContext);

  const [name, setName] = useState(currentUser?.name || "");
  const [description, setDescription] = useState(currentUser?.about || "");

  useEffect(() => {
    // Cuando currentUser cambie (llega de la API), actualizamos los valores del formulario
    setName(currentUser?.name || "");
    setDescription(currentUser?.about || "");
  }, [currentUser]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  const { handleUpdateUser } = useContext(CurrentUserContext);

  const [isSaving, setIsSaving] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSaving(true);
    try {
      await handleUpdateUser({ name, about: description });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  }

  return (
    <form
      className="popup__form"
      id="popup__form-profile"
      name="profile-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__form-fieldset">
        <input
          type="text"
          id="popup__form-name"
          className="popup__form-input popup__input"
          name="name"
          placeholder="Nombre"
          required
          minLength={2}
          maxLength={40}
          value={name}
          onChange={handleNameChange}
        />
        <span className="popup__error" id="popup__form-name-error"></span>
        <input
          type="text"
          id="popup__form-about"
          className="popup__form-input popup__input"
          name="about"
          placeholder="Acerca de mi"
          required
          minLength={4}
          maxLength={30}
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="popup__error" id="popup__form-about-error"></span>
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

export default EditProfile;

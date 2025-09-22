import Equis from "@images/equis.png";

function RemoveCard() {
  return (
    <>
      <button
        type="submit"
        className="popup__form-btn-submit popup__form-btn-submit-delete"
      >
        Sí, eliminar
      </button>
      <button type="button" className="popup__container-btn-close">
        <img
          src={Equis}
          alt="cerrar ventana"
          className="popup__form-btn-close-image"
          id="popup__form_btn-close-image"
        />
      </button>
    </>
  );
}

export default RemoveCard;

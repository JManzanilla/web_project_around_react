import Equis from "../../../../../images/equis.png";

function NewCard() {
  return (
    <>
      <div className="popup" id="popup__image-card">
        <div className="popup__container-images">
          <img src=" " alt=" " className="popup__container-image" />
          <p className="popup__container-title popup__container__title-image"></p>
          <button
            type="button"
            className="popup__container-btn-close popup__btn"
          >
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

export default NewCard;

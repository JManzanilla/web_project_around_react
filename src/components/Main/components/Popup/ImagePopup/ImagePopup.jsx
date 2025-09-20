import Equis from "../../../../../images/equis.png";

function ImagePopup() {
  return (
    <>
      <div className="popup" id="popup__image">
        <div className="popup__container">
          <img src="" alt="Imagen ampliada" className="popup__image" />
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

export default ImagePopup;

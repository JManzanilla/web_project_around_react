import Equis from "@images/equis.png";
function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const { title, children, onClose } = props;
  return (
    <>
      <div className="popup popup__show" id="popup__profile">
        <div
          className={`popup__container ${
            !title ? "popup__container-images" : ""
          }`}
        >
          {title && <h3>{title}</h3>}

          {children}
          <button
            type="button"
            className="popup__container-btn-close"
            onClick={onClose}
          >
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
export default Popup;

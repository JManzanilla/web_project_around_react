import { useState } from "react";
import Equis from "./../../../../images/equis.png";
function Popup(props) {
  //los hijos son el contenido de la ventana emergente
  const { title, children, onClose } = props;
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 800);
  };

  return (
    <div
      className={`popup popup__show ${isClosing ? "popup__hide" : ""}`}
      id="popup__profile"
    >
      <div
        className={` ${
          !title ? "popup__container-images" : "popup__container"
        }`}
      >
        {title && <h3>{title}</h3>}
        {children}
        <button
          type="button"
          className={` ${
            !title
              ? "popup__container-btn-close popup__btn"
              : "popup__container-btn-close "
          }`}
          onClick={handleClose}
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
  );
}
export default Popup;

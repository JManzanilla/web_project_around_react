import { useState, useEffect } from "react";
import closeIcon from "./../../images/equis.png";

function InfoTooltip({ isOpen, onClose, isSuccess, message, image }) {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
    if (isOpen) {
      const timer = setTimeout(onClose, 30000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isVisible) return null;

  return (
    <div className="popup popup__show" onClick={onClose}>
      <div className="popup__container" onClick={(e) => e.stopPropagation()}>
        <button className="popup__container-btn-close" onClick={onClose}>
          <img src={closeIcon} alt="cerrar" />
        </button>
        {image && <img src={image} alt="resultado" className="popup__image" />}
        <h2 className="popup__container-title">
          {isSuccess ? "¡Bienvenido!" : "Algo salió mal"}
        </h2>
        <p className="popup__container-title">{message}</p>
      </div>
    </div>
  );
}

export default InfoTooltip;

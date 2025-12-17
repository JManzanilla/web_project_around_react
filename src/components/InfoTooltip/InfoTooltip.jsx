import { useState, useEffect } from "react";
import closeIcon from "@images/equis.png";

function InfoTooltip({ isOpen, onClose, isSuccess, message }) {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen);
    if (isOpen) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isVisible) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          <img src={closeIcon} alt="cerrar" />
        </button>
        <div
          className={`modal__content modal__content_${
            isSuccess ? "success" : "error"
          }`}
        >
          <h2 className="modal__title">
            {isSuccess ? "¡Bienvenido!" : "Algo salió mal"}
          </h2>
          <p className="modal__message">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default InfoTooltip;

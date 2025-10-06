function RemoveCard({ onConfirm }) {
  return (
    <>
      <button
        type="button"
        className="popup__form-btn-submit popup__form-btn-submit-delete"
        onClick={onConfirm}
      >
        Sí, eliminar
      </button>
    </>
  );
}

export default RemoveCard;

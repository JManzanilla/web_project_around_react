function ImagePopup(props) {
  return (
    <>
      <img
        src={props.link}
        alt="Imagen ampliada"
        className="popup__container-image"
      />
      <p className="popup__container-title popup__container__title-image">
        {props.name}
      </p>
    </>
  );
}

export default ImagePopup;

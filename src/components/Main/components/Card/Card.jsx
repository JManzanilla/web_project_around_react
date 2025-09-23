import trash from "@images/trash.png";
import ImagePopup from "@componentsMain/Popup/Form/ImagePopup/ImagePopup";
import RemoveCard from "../Popup/Form/RemoveCard/RemoveCard";

function Card(props) {
  const { name, link } = props.card;
  const imagenPopup = {
    title: "",
    children: <ImagePopup name={name} link={link} />,
  };
  const removeCardPopupImage = {
    title: "Estas seguro",
    children: <RemoveCard />,
  };
  function handleClick() {
    props.onHandleOpenPopup(imagenPopup);
  }
  function removeCard() {
    props.onHandleOpenPopup(removeCardPopupImage);
  }

  return (
    <>
      <div className="element__content" id="card__element__content">
        <img
          src={link}
          alt={`Imagen de ${name}`}
          className="element__image"
          onClick={handleClick}
        />
        <button
          type="button"
          className="element__content-btn"
          onClick={removeCard}
        >
          <img src={trash} alt="basura" className="element__content-trash" />
        </button>
        <div className="element__content-description">
          <h3 className="element__content-description-title">{name}</h3>
          <button className="element__content-like"></button>
        </div>
      </div>
    </>
  );
}

export default Card;

import trash from "../../../../images/trash.png";
import ImagePopup from "../Popup/ImagePopup/ImagePopup";
import RemoveCard from "../Popup/RemoveCard/RemoveCard";

function Card(props) {
  const { name, link } = props.card;
  const { isLiked } = props;
  const cardLikeButtonClassName = `element__content-like ${
    isLiked ? "element__content-like_is-active" : ""
  }`;
  const imagenPopup = {
    title: "",
    children: <ImagePopup name={name} link={link} />,
  };
  const removeCardPopupImage = {
    title: "Estas seguro",
    children: (
      <RemoveCard
        onConfirm={() => {
          if (props.onCardDelete) props.onCardDelete(props.card);
        }}
      />
    ),
  };
  function handleClick() {
    props.onHandleOpenPopup(imagenPopup);
  }
  function handleDeleteClick() {
    props.onHandleOpenPopup(removeCardPopupImage);
  }
  function handleLikeClick() {
    if (props.onCardLike) props.onCardLike(props.card);
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
          onClick={handleDeleteClick}
        >
          <img src={trash} alt="basura" className="element__content-trash" />
        </button>
        <div className="element__content-description">
          <h3 className="element__content-description-title">{name}</h3>
          <button
            className={cardLikeButtonClassName}
            type="button"
            onClick={handleLikeClick}
          ></button>
        </div>
      </div>
    </>
  );
}

export default Card;

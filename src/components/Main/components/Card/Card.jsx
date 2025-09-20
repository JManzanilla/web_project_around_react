import trash from "@images/trash.png";

function Card() {
  return (
    <>
      <template id="card">
        <div className="element__content" id="card__element__content">
          <img
            src="./images/0.png"
            alt="vista de un valle con rio y arboles"
            className="element__image"
          />
          <button type="button" className="element__content-btn">
            <img src={trash} alt="basura" className="element__content-trash" />
          </button>
          <div className="element__content-description">
            <h3 className="element__content-description-title">
              Valle de Yosemite
            </h3>
            <button className="element__content-like"></button>
          </div>
        </div>
      </template>
    </>
  );
}

export default Card;

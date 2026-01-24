import Card from "./components/Card/Card";
import Popup from "./components/Popup/Popup";
import Loader from "./components/Loader/Loader";
import Profile from "./components/Profile/Profile";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Main({
  onOpenPopup,
  onClosePopup,
  popup,
  cards,
  isLoading,
  onCardLike,
  onCardDelete,
  onAddPlaceSubmit,
}) {
  /*  const [currentUser, setCurrentUser] = useState({}); */
  /*   console.log(currentUser); */

  const { currentUser } = useContext(CurrentUserContext);

  function handleOpenPopup(popupData) {
    if (onOpenPopup) onOpenPopup(popupData);
  }
  function handleClosePopup() {
    if (onClosePopup) onClosePopup();
  }
  return (
    <>
      <main className="main">
        <Profile
          onHandleOpenPopup={handleOpenPopup}
          onAddPlaceSubmit={onAddPlaceSubmit}
        />
        <section className="element">
          {isLoading ? (
            <Loader />
          ) : cards.length === 0 ? (
            <p>No hay tarjetas aún.</p>
          ) : (
            cards.map((card) => {
              const isLiked = Boolean(
                currentUser &&
                  ((Array.isArray(card.likes) &&
                    card.likes.some(
                      (like) =>
                        like._id === currentUser._id || like === currentUser._id
                    )) ||
                    card.isLiked)
              );

              return (
                <Card
                  key={card._id}
                  card={card}
                  isLiked={isLiked}
                  onHandleOpenPopup={handleOpenPopup}
                  onCardLike={onCardLike}
                  onCardDelete={onCardDelete}
                />
              );
            })
          )}
        </section>
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
}

export default Main;

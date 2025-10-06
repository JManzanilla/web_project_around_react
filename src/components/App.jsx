import { useState, useEffect } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import CurrentUser from "../contexts/CurrentUserContext";
import { api } from "../utils/Api";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.getUserInfo().then(setCurrentUser).catch(console.error);
  }, []);

  useEffect(() => {
    setIsLoading(true);
    api
      .getInitialCards()
      .then((cards) => {
        console.log("getInitialCards: ", cards);
        setCards(cards);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, []);

  async function handleUpdateUser(data) {
    try {
      const updated = await api.updateUserInfo(data);
      setCurrentUser(updated);

      setPopup(null);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleUpdateAvatar(data) {
    try {
      const updated = await api.updateAvatar(data);
      setCurrentUser(updated);
      setPopup(null);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleCardLike(card) {
    const currentCard = cards.find((c) => c._id === card._id) || card;

    const isLiked = Boolean(
      currentUser &&
        ((Array.isArray(currentCard.likes) &&
          currentCard.likes.some((l) =>
            l && l._id ? l._id === currentUser._id : l === currentUser._id
          )) ||
          currentCard.isLiked)
    );

    const optimisticCard = {
      ...currentCard,
      likes: isLiked
        ? (currentCard.likes || []).filter((l) =>
            l && l._id ? l._id !== currentUser._id : l !== currentUser._id
          )
        : [...(currentCard.likes || []), { _id: currentUser._id }],
    };

    const prevCards = cards;

    setCards((state) =>
      state.map((c) => (c._id === card._id ? optimisticCard : c))
    );
    try {
      const newCard = isLiked
        ? await api.removeLike(card._id)
        : await api.addLike(card._id);

      const normalizedCard = (() => {
        if (Array.isArray(newCard.likes)) return newCard;
        if (typeof newCard.isLiked === "boolean") {
          return {
            ...newCard,
            likes: newCard.isLiked ? [{ _id: currentUser._id }] : [],
          };
        }
        return { ...newCard, likes: [] };
      })();

      setCards((state) =>
        state.map((c) => (c._id === card._id ? normalizedCard : c))
      );
    } catch (error) {
      console.error("Like toggle failed:", error);
      setCards(prevCards);
    }
  }

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);
      setCards((state) => state.filter((c) => c._id !== card._id));
      setPopup(null);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleAddPlaceSubmit({ name, link }) {
    try {
      const newCard = await api.createCards({ name, link });
      setCards((state) => [newCard, ...state]);
      setPopup(null);
    } catch (error) {
      console.error(error);
    }
  }

  function handleOpenPopup(popupData) {
    setPopup(popupData);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <CurrentUser.Provider
      value={{ currentUser, handleUpdateUser, handleUpdateAvatar }}
    >
      <div className="page">
        <Header />
        <Main
          onOpenPopup={handleOpenPopup}
          onClosePopup={handleClosePopup}
          popup={popup}
          isLoading={isLoading}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <Footer />
      </div>
    </CurrentUser.Provider>
  );
}

export default App;

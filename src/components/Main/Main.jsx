import Card from "@componentsMain/Card/Card";
import Popup from "./components/Popup/Popup";
import Loader from "@componentsMain/Loader/Loader";
import Profile from "./components/Profile/Profile";
import { useState } from "react";
import Api from "@/utils/Api";

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "911005ad-24e0-40bd-a91b-f65ac83a977d",
    "Content-Type": "application/json",
  },
});

function Main() {
  const [popup, setPopup] = useState(null);
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getInitialCards().then(setCards);
  }, []);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }
  return (
    <>
      <main className="main">
        <Profile onHandleOpenPopup={handleOpenPopup} />
        <section className="element">
          <Loader />
          {cards.map((card) => (
            <Card
              key={card._id}
              card={card}
              onHandleOpenPopup={handleOpenPopup}
            />
          ))}
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

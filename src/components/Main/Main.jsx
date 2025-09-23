import Card from "@componentsMain/Card/Card";
import Popup from "./components/Popup/Popup";
import Loader from "@componentsMain/Loader/Loader";
import Profile from "./components/Profile/Profile";
import { useState } from "react";
const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

function Main() {
  const [popup, setPopup] = useState(null);

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

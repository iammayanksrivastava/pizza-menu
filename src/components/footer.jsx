import "../index.css";

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're Open from {openHour}:00 & {closeHour}:00. Order Online
      </p>
      <button className="btn">Order Online</button>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 23;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
    </footer>
  );
}

export default Footer;

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  if (isOpen) {
    return <footer className="footer">We're currently Open</footer>;
  } else {
    return <footer className="footer">We're currently Closed</footer>;
  }
}
export default Footer;

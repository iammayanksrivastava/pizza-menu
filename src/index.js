import React from "react";
import ReactDOM from "react-dom/client";
//Import Components
import Footer from "./components/footer";
import Menu from "./components/menu";
import Header from "./components/header";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

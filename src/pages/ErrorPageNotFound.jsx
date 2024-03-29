import React from "react";
import "../scss/ErrorPageNotFound.scss";
import Navbar from "../components/Navbar.jsx";
import Main from "../layout/Main.jsx";
import Footer from "../layout/Footer.jsx";
import { Link } from "react-router-dom";

function ErrorPageNotFound() {
  return (
    <>
    <div className="error-page-container">
      <Navbar />
      <Main>
        <div className="error-page">
          <h1>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas</h2>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
      </Main>
      <Footer />
      </div>
    </>
  );
}

export default ErrorPageNotFound;

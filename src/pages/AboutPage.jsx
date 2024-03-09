import React, { Component } from "react";
import ImageBanner from "../components/ImageBanner.jsx";
import "../scss/AboutPage.scss";
import Collapse from "../components/Collapse.jsx";

export class AboutPage extends Component {
  render() {
    return (
      <>
      <div className="about__page__container">  
        <div className="about__banner">
          <ImageBanner />
        </div>
        <div className="about__container">
          <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
          <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme." />
          <Collapse title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme." />
          <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
        </div>
        </div>
      </>
    );
  }
}

export default AboutPage;

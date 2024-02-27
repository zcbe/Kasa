import React, { useState } from "react";
import "./ImageBanner.scss";

function ImageBanner(props) {
  //const imageUrl = props.imageUrl ? props.imageUrl : '/bannerapropos.png';
  const pictures = props.pictures; // Assignation de la liste de photos depuis les props

  // Utilisation du hook useState pour gérer l'index de la photo actuellement affichée
  const [currentPicture, setCurrentPicture] = useState(0);

  // Fonction pour obtenir la classe CSS en fonction de l'index de la photo
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
    return "";
  };

  // Fonction pour passer à la photo suivante dans le carousel
  const moveToNext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  };

  // Fonction pour passer à la photo précédente dans le carousel
  const moveToPrevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  // Fonction pour vérifier si des images sont disponibles
  const arePicturesAvailable = () => {
    return pictures && pictures.length > 0;
  };

  // Fonction pour obtenir le carousel d'images ou une image par défaut si aucune image n'est disponible
  const getCarouselOrDefaultImage = () => {
    if (!arePicturesAvailable()) {
      return <img src="./bannerapropos.png" className="show" alt="" />; // Image par défaut
    }
    return pictures.map((pic, i) => (
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img> // Carousel d'images
    ));
  };

  // Retour du composant
  return (
    <div className="image__banner">
      {" "}
      {/* Début de la définition du contenu de la bannière d'images */}
      <div className="image__container">{getCarouselOrDefaultImage()}</div>{" "}
      {/* Affichage du carousel d'images ou de l'image par défaut */}
      {/* Affichage des contrôles de navigation si des images sont disponibles */}
      {arePicturesAvailable() && (
        <>
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>

          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
        </>
      )}
    </div>
  );
}

export default ImageBanner;

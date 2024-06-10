import { useState } from "react";

const cbande = [
  { value: 4, color: "blue", name: "Bleu" },
  { value: 5, color: "yellow", name: "Jaune" },
  { value: 1, color: "transparent", name: "Autre" },
];

const tbande = (value: number) => {
  return `Relâcher lorsque le compte à rebours affiche un ${value} à n'importe quelle position`;
};

function Button() {
  const [bandeValue, setBandeValue] = useState(0);

  return (
    <>
      <div className="btn-pile">
        <h2>êtes vous dans l'un des deux cas suivant :</h2>
        <button
          className="btn-red-mtn"
          style={{
            backgroundColor: "red",
            borderRadius: "50%",
            height: "200px",
            aspectRatio: 1,
            fontSize: "20px",
          }}
        >
          {" Maintenir"}
        </button>
        <h3>ou</h3>
        <div className="text">
          <p>Si il y a </p>
          <ul>
            <li>1 pile et bouton marqué « Exploser »</li>
            <li>2 piles et un indicateur allumé avec les lettres FRK</li>
          </ul>
        </div>
Appuyer et immédiatement relâcher le bouton
        <p></p>
      </div>

      <div className="bande">
        <h2>Cliquer sur la couleur de bande correspondante</h2>
        {cbande.map((bande) => (
          <button
            id={bande.color}
            key={bande.value}
            style={{
              backgroundColor: bande.color,
              color: bande.color == "yellow" ? "black" : "whitesmoke",
              width: "200px",
              height: " 30px",
            }}
            onClick={() => {
              setBandeValue(bande.value);
            }}
          >
            {bande.name}
          </button>
        ))}
        <p>{bandeValue ? tbande(bandeValue) : ""}</p>
      </div>
    </>
  );
}

export default Button;

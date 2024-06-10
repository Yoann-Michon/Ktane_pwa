import { useState } from "react";

const nbfils = [3, 4, 5, 6];
const colors = [
  { name: "blue" },
  { name: "red" },
  { name: "black" },
  { name: "yellow" },
  { name: "white" },
];

const Fils = () => {
  const [nbr, setNbr] = useState(0);
  const [colorValues, setColorValues] = useState<string[]>([]);
  const [textInput, setTextInput] = useState("");

  const handleChangeValue = (index: number, colorName: string) => {
    const newColorValues = [...colorValues];
    newColorValues[index] = colorName;
    setColorValues(newColorValues);
  };

  const CutWires = ({
    nbr,
    colorValues,
    textInput,
  }: {
    nbr: number;
    colorValues: string[];
    textInput: string;
  }) => {
    const blueCount = colorValues.filter((color) => color === "blue").length;
    const redCount = colorValues.filter((color) => color === "red").length;
    const yellowCount = colorValues.filter((color) => color === "yellow").length;
    const whiteCount = colorValues.filter((color) => color === "white").length;
    const blackCount = colorValues.filter((color) => color === "black").length;

    const evenOrOdd = (num: number) => (num % 2 === 0 ? "even" : "odd");

    let message = "";

    if (nbr === 3) {
      if (redCount === 0) {
        message = "Coupez le 2ème fil";
      } else if (blueCount > 1) {
        message = "Coupez le dernier fil bleu";
      } else {
        message = "Coupez le dernier fil";
      }
    }

    if (nbr === 4) {
      if (redCount > 1 && evenOrOdd(parseInt(textInput)) === "odd") {
        message = "Coupez le dernier fil rouge";
      } else if (
        (redCount === 0 && colorValues[colorValues.length - 1] === "yellow") ||
        blueCount === 1
      ) {
        message = "Coupez le 1er fil";
      } else if (yellowCount > 1) {
        message = "Coupez le dernier fil";
      } else {
        message = "Coupez le 2ème fil";
      }
    }

    if (nbr === 5) {
      if (
        colorValues[colorValues.length - 1] === "black" &&
        evenOrOdd(parseInt(textInput)) === "odd"
      ) {
        message = "Coupez le 4ème fil";
      } else if (blackCount === 0) {
        message = "Coupez le 2ème fil";
      } else {
        message = "Coupez le 1er fil";
      }
    }

    return <p>{message}</p>;
  };

  const handleFils = () => {
    let elt = [];
    for (let i = 0; i < nbr; i++) {
      elt.push(
        <div
          key={i}
          style={{
            display: "flex",
            flexDirection: "column",
            height: "300px",
            alignItems: "center",
          }}
        >
          <span
            style={{
              position: "relative",
              height: "100%",
              width: "30px",
              border: "1px solid grey",
              backgroundColor: colorValues[i] || "transparent",
            }}
          ></span>
          <ColorInputs setColorValue={(colorName: string) => handleChangeValue(i, colorName)} />
        </div>
      );
    }
    return elt;
  };

  const ColorInputs = (props: { setColorValue: (colorName: string) => void }) => {
    return (
      <div
        className="color-inputs"
        style={{ display: "flex", flexDirection: "column", height: 150 }}
      >
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => props.setColorValue(color.name)}
            style={{
              backgroundColor: color.name,
              height: "20px",
              width: "30px",
              margin: "2px 0",
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="str">
      <div className="str-btn">
        <h1>Choisir le nombre de fils présent sur le module</h1>
        {nbfils.map((fil, index) => (
          <button
            key={index}
            onClick={() => {
              setNbr(fil);
            }}
          >
            {fil}
          </button>
        ))}
      </div>
      <div
        className="nbr-str"
        style={{
          display: "flex",
          flexDirection: "row",
          width: 700,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {handleFils()}
      </div>
      <CutWires nbr={nbr} colorValues={colorValues} textInput={textInput} />
    </div>
  );
};

export default Fils;

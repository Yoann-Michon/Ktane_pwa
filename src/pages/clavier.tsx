import { useState } from "react";
import archaicKoppa from "./../assets/symbols/archaic_koppa.jpeg";
import cyrillicYus from "./../assets/symbols/cyrillic_yus.jpeg";
import strokeLambda from "./../assets/symbols/stroke_lambda.jpeg";
import iotifiedYus from "./../assets/symbols/iotified_yus.jpeg";
import greekKai from "./../assets/symbols/greek_kai.jpeg";
import antiSigma from "./../assets/symbols/anti_sigma.jpeg";
import cyrillicE from "./../assets/symbols/cyrillic_E.jpeg";
import cyrillicOHook from "./../assets/symbols/cyrillic_O_hook.jpeg";
import whiteStar from "./../assets/symbols/white_star.jpeg";
import greekKoppa from "./../assets/symbols/greek_koppa.jpeg";
import questionMark from "./../assets/symbols/question_mark.jpeg";

const firstColumn = [
  { name: "archaic koppa" },
  { name: "cyrillic yus" },
  { name: "stroke lambda" },
  { name: "greek koppa" },
  { name: "iotified yus" },
  { name: "greek kai" },
  { name: "anti-sigma" },
];

const secondColumn = [
  { name: "cyrillic E" },
  { name: "archaic koppa" },
  { name: "anti-sigma" },
  { name: "cyrillic O-hook" },
  { name: "white star" },
  { name: "greek kai" },
  { name: "question mark" },
];

const merge = [...firstColumn, ...secondColumn];
const allSymbol = merge.filter((item, index) => {
  const currentName = item.name;
  return index === merge.findIndex((obj) => obj.name === currentName);
});

const symbolImages: { [key: string]: string } = {
  "archaic koppa": archaicKoppa,
  "cyrillic yus": cyrillicYus,
  "stroke lambda": strokeLambda,
  "iotified yus": iotifiedYus,
  "greek kai": greekKai,
  "anti-sigma": antiSigma,
  "cyrillic E": cyrillicE,
  "cyrillic O-hook": cyrillicOHook,
  "white star": whiteStar,
  "greek koppa": greekKoppa,
  "question mark": questionMark,
};

const Clavier = () => {
  const [result, setResultValue] = useState<string[]>([]);
  const [sortedSymbols, setSortedSymbols] = useState<{ name: string }[]>([]);

  const changeValue = (selectedSymbol: string) => {
    if (result.length < 4) {
      setResultValue([...result, selectedSymbol]);
    }
  };

  const reset = () => {
    setResultValue([]);
    setSortedSymbols([]);
  };

  const solve = () => {
    const tab: { name: string }[] = [];
    for (let sym of result) {
      for (let symbol of firstColumn) {
        if (sym === symbol.name) {
          tab.push(symbol);
        }
      }
    }
    if (tab.length !== 4) {
      tab.length = 0;
      for (let sym of result) {
        for (let symbol of secondColumn) {
          if (sym === symbol.name) {
            tab.push(symbol);
          }
        }
      }
      tab.sort((a, b) => secondColumn.indexOf(a) - secondColumn.indexOf(b));
    } else {
      tab.sort((a, b) => firstColumn.indexOf(a) - firstColumn.indexOf(b));
    }

    setSortedSymbols(tab);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        width: "100%",
      }}
    >
      <div>
        <p style={{ textAlign: "center", marginBottom: 30 }}>
          Cliquer sur les 4 symboles présents sur le clavier.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {allSymbol.map((symbol, index) => (
          <button
            key={index}
            onClick={() => changeValue(symbol.name)}
            style={{
              borderWidth: 2,
              borderColor: result.includes(symbol.name) ? "green" : "black",
              margin: 10,
              padding: 0,
              background: "none",
              borderStyle: "solid",
            }}
          >
            <img
              src={symbolImages[symbol.name]}
              alt={symbol.name}
              style={{ width: 50, aspectRatio: 1, objectFit: "contain" }}
            />
          </button>
        ))}
      </div>
      <div style={{ flexDirection: "row", margin: 20 }}>
        <button onClick={reset}>Annuler</button>
        <div style={{ width: 10 }} />
        <button onClick={solve}>Valider</button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: 150,
        }}
      >
        <p>Solution:</p>
        {sortedSymbols.length > 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
            }}
          >
            {sortedSymbols.map((symbol, index) => (
              <img
                key={index}
                src={symbolImages[symbol.name]}
                alt={symbol.name}
                style={{ width: 50, aspectRatio: 1, objectFit: "contain" }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Clavier;

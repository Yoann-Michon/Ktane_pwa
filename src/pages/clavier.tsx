import { useState } from "react";
import { Grid, Box, Typography, Button, Card, CardMedia, CardActionArea } from "@mui/material";
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
  return index === merge.findIndex((obj) => obj.name === item.name);
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

const Keyboard = () => {
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
    <Box sx={{ minHeight: "100vh", bgcolor: "black", color: "white", py: 4, textAlign: "center" }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Click on the 4 symbols present on the keyboard.
      </Typography>

      {/* Symbols Grid */}
      <Grid container spacing={2} justifyContent="center">
        {allSymbol.map((symbol, index) => (
          <Grid item key={index}>
            <Card
              sx={{
                width: 80,
                bgcolor: result.includes(symbol.name) ? "green" : "gray.900",
                border: result.includes(symbol.name) ? "2px solid green" : "2px solid white",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardActionArea onClick={() => changeValue(symbol.name)}>
                <CardMedia
                  component="img"
                  image={symbolImages[symbol.name]}
                  alt={symbol.name}
                  sx={{ aspectRatio: 1, objectFit: "contain" }}
                />
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 4 }}>
        <Button variant="contained" color="secondary" onClick={reset}>
          Reset
        </Button>
        <Button variant="contained" color="primary" onClick={solve}>
          Validate
        </Button>
      </Box>

      {/* Solution Display */}
      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h6">Solution:</Typography>
        {sortedSymbols.length > 0 && (
          <Grid container spacing={2} justifyContent="center" mt={2}>
            {sortedSymbols.map((symbol, index) => (
              <Grid item key={index}>
                <Card sx={{ width: 80, bgcolor: "gray.800" }}>
                  <CardMedia
                    component="img"
                    image={symbolImages[symbol.name]}
                    alt={symbol.name}
                    sx={{ aspectRatio: 1, objectFit: "contain" }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Keyboard;

import { useState } from "react";
import { Button, TextField, Typography, Box } from "@mui/material";

const wireCounts = [3, 4, 5, 6];
const colors = ["blue", "red", "black", "yellow", "white"];

const Wires = () => {
  const [numWires, setNumWires] = useState(0);
  const [colorValues, setColorValues] = useState<string[]>([]);
  const [serialNumber, setSerialNumber] = useState("");

  const handleColorChange = (index: number, colorName: string) => {
    const newColorValues = [...colorValues];
    newColorValues[index] = colorName;
    setColorValues(newColorValues);
  };

  const determineWireToCut = () => {
    const blueCount = colorValues.filter((color) => color === "blue").length;
    const redCount = colorValues.filter((color) => color === "red").length;
    const yellowCount = colorValues.filter((color) => color === "yellow").length;
    const blackCount = colorValues.filter((color) => color === "black").length;

    const isOdd = (num: number) => num % 2 !== 0;
    let message = "";

    if (numWires === 3) {
      if (redCount === 0) message = "Cut the 2nd wire";
      else if (blueCount > 1) message = "Cut the last blue wire";
      else message = "Cut the last wire";
    }

    if (numWires === 4) {
      if (redCount > 1 && isOdd(parseInt(serialNumber))) message = "Cut the last red wire";
      else if ((redCount === 0 && colorValues[colorValues.length - 1] === "yellow") || blueCount === 1) 
        message = "Cut the 1st wire";
      else if (yellowCount > 1) message = "Cut the last wire";
      else message = "Cut the 2nd wire";
    }

    if (numWires === 5) {
      if (colorValues[colorValues.length - 1] === "black" && isOdd(parseInt(serialNumber))) 
        message = "Cut the 4th wire";
      else if (blackCount === 0) message = "Cut the 2nd wire";
      else message = "Cut the 1st wire";
    }

    return message;
  };

  return (
    <Box textAlign="center">
      <Typography variant="h5">Select the number of wires</Typography>
      {wireCounts.map((count, index) => (
        <Button key={index} variant="contained" onClick={() => setNumWires(count)} sx={{ m: 1 }}>
          {count}
        </Button>
      ))}

      <Box display="flex" justifyContent="center" mt={2}>
        {Array.from({ length: numWires }, (_, i) => (
          <Box key={i} textAlign="center" mx={1}>
            <Box
              sx={{
                width: 30,
                height: 200,
                border: "1px solid grey",
                backgroundColor: colorValues[i] || "transparent",
              }}
            />
            <Box mt={1}>
              {colors.map((color) => (
                <Button
                  key={color}
                  variant="outlined"
                  onClick={() => handleColorChange(i, color)}
                  sx={{ backgroundColor: color, color: "white", m: 0.5 }}
                >
                  {color}
                </Button>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {numWires >= 4 && (
        <Box mt={3}>
          <Typography>Enter the last digit of the bomb's serial number</Typography>
          <TextField
            type="text"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value)}
            sx={{ mt: 1, width: "100px" }}
            inputProps={{ style: { textAlign: "center" } }}
          />
        </Box>
      )}

      <Typography variant="h6" mt={3}>{determineWireToCut()}</Typography>
    </Box>
  );
};

export default Wires;

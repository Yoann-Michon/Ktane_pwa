import { useState } from "react";
import { Button, Box, Typography } from "@mui/material";

const colorBands = [
  { value: 4, color: "blue", name: "Blue" },
  { value: 5, color: "yellow", name: "Yellow" },
  { value: 1, color: "transparent", name: "Other" },
];

const getReleaseInstruction = (value: number) => {
  return `Release when the countdown timer displays a ${value} in any position.`;
};

function ButtonModule() {
  const [bandValue, setBandValue] = useState(0);

  return (
    <Box>
      <Box textAlign="center" mb={3}>
        <Typography variant="h6">Are you in one of the following cases?</Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "red",
            borderRadius: "50%",
            width: "120px",
            height: "120px",
            fontSize: "16px",
            color: "white",
            "&:hover": { backgroundColor: "darkred" },
          }}
        >
          Hold
        </Button>
        <Typography variant="h6" mt={2}>or</Typography>
      </Box>

      <Typography textAlign="center" mb={1}>If there is:</Typography>
      <ul>
        <li>1 battery and the button is labeled "Detonate"</li>
        <li>2 batteries and a lit indicator with the letters FRK</li>
      </ul>

      <Typography textAlign="center" fontWeight="bold">
        Press and immediately release the button
      </Typography>

      <Box mt={4}>
        <Typography variant="h6" textAlign="center">Click on the corresponding strip color:</Typography>
        <Box display="flex" justifyContent="center" gap={2} mt={2}>
          {colorBands.map((band) => (
            <Button
              key={band.value}
              variant="contained"
              sx={{
                backgroundColor: band.color,
                color: band.color === "yellow" ? "black" : "whitesmoke",
                width: "100px",
              }}
              onClick={() => setBandValue(band.value)}
            >
              {band.name}
            </Button>
          ))}
        </Box>
        {bandValue ? (
          <Typography textAlign="center" mt={2} fontWeight="bold">
            {getReleaseInstruction(bandValue)}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
}

export default ButtonModule;

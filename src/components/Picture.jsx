import { Box, Typography } from "@mui/material";
import React from "react";

export const Picture = ({ picture, name }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundColor: "#150522",
        display: "grid",
        justifyContent: "center",
        alignContent: "center",
        padding: { xs: "10px", md: "70px" },
        gap: "10px",
      }}
    >
      <Box
        sx={{ maxWidth: "500px", width: "100%" }}
        component="img"
        src={picture}
        alt={name}
      />
      <Typography
        variant="h1"
        fontWeight="fontWeightBold"
        color="white"
        sx={{ opacity: 0.7, textAlign: "center" }}
      >
        {name}
      </Typography>
    </Box>
  );
};

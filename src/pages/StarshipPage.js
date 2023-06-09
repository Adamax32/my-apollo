import { Grid, Typography } from "@mui/material";
import React from "react";
import { StarshipList } from "../modules/films/StarshipList";

export const StarshipPage = () => {
  return (
    <Grid container spacing={2} style={{ backgroundColor: 'grey' }}>
      <Grid item xs={10}>
        <Typography variant="h3">Starships</Typography>
      </Grid>
      <Grid item xs={10}>
        <StarshipList />
      </Grid>
    </Grid>
  );
};
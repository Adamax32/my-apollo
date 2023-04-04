import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <Grid  container spacing={2}>
      <Grid item>
        <Link to="/">Home</Link>
      </Grid>
      <Grid item>
        <Link to="/films">Films</Link>
      </Grid>
      <Grid item>
        <Link to="/starships">Starships</Link>
      </Grid>
    </Grid>
  );
};

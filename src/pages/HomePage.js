import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Typography>
          This is a very important application that represents the data from the
          Star Wars <Link to="/films">films</Link>.
        </Typography>
      </Grid>
    </Grid>
  );
};

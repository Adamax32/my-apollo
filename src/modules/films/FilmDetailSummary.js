import { Grid, Typography } from "@mui/material";
import React from "react";

export const FilmDetailSummary = (props) => {
  const { director, openingCrawl, producers } = props;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="subtitle1">Directed by: {director}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">
          Produced by: {producers.join(", ")}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h6">Opening Crawl</Typography>
        <Typography variant="body1">{openingCrawl}</Typography>
      </Grid>
    </Grid>
  );
};

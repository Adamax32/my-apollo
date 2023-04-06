import { Grid, Typography } from "@mui/material";
import React from "react";
import { FilmList } from "../modules/films/FilmList";

const backgroundImage = "url('https://spaceplace.nasa.gov/nebula/en/nebula1.en.jpg')";

export const FilmsPage = () => {
  return (
    <div
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        width: '80vw', // Add this line to set the width
        margin: '0 auto', // Add this line to center the container horizontally
      }}
    >
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={10}>
          <Typography variant="h3" style={{ fontFamily: 'Parisienne', fontSize: '99px', color: '#fff', textAlign: 'center' }}>
            Films
          </Typography>
        </Grid>
        <Grid item xs={10} sx={{ marginLeft: '50px' }}>
          <FilmList />
        </Grid>
      </Grid>

    </div>
  );
};

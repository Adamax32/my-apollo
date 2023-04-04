import { useQuery } from "@apollo/client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";
import { FilmDetailSummary } from "../modules/films/FilmDetailSummary";
import { GET_FILM_DETAIL } from "../modules/films/queries";
import { PlanetList } from "../modules/planets/PlanetList";

export const FilmDetailPage = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_FILM_DETAIL, {
    variables: { filmId: id },
  });

  if (error) return <ErrorMessage error={error} />;

  if (loading) return <Loading />;

  const film = data.film;
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">{film.title}</Typography>
        <FilmDetailSummary
          director={film.director}
          openingCrawl={film.openingCrawl}
          producers={film.producers}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4">Planets</Typography>
        <PlanetList planets={film.planetConnection.planets} />
      </Grid>
    </Grid>
  );
};

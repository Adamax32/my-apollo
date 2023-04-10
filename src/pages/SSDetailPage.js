import { useQuery } from "@apollo/client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";
import { GET_STARSHIP_DETAIL } from "../modules/films/queries";


export const StarshipDetailPage = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_STARSHIP_DETAIL, {
    variables: { starshipId: id },
  });

  if (error) return <ErrorMessage error={error} />;

  if (loading) return <Loading />;

  const ship = data.starship;
  return (
    <Grid container spacing={2} style={{ backgroundColor: 'purple' }}>
      <Grid item xs={12}>
        <Typography color='white' fontFamily="'Times New Roman', serif" variant="h1">{ship.name}</Typography>

        <Typography  fontFamily="'Times New Roman', serif" variant="h2">Created:{ship.created}</Typography>
        <Typography  fontFamily="'Times New Roman', serif" variant="h2">maxAtmospheringSpeed: {ship.maxAtmospheringSpeed} </Typography>
        <Typography  fontFamily="'Times New Roman', serif" variant="h3">hyperdriveRating:{ship.hyperdriveRating}</Typography>
      </Grid>

   
    </Grid>
  );
};

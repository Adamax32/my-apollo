import { useQuery } from "@apollo/client";
import { Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { ErrorMessage } from "../components/ErrorMessage";
import { Loading } from "../components/Loading";
import { GET_CHARACTER_DETAIL } from "../modules/films/queries";


export const CharacterDetailPage = () => {
  const { id } = useParams();

  const { data, loading, error } = useQuery(GET_CHARACTER_DETAIL, {
    variables: { personId: id },
  });

  if (error) return <ErrorMessage error={error} />;

  if (loading) return <Loading />;

  const character = data.person;
  return (
    <Grid container spacing={2} style={{ backgroundColor: 'blue' }}>
      <Grid item xs={12}>
        <Typography color='white' variant="h1">{character.name}</Typography>
        <Typography variant="h2">Gender:{character.gender}</Typography>
        
        <Typography variant="h2">Homeworld - {character.homeworld.name} </Typography>
        <Typography variant="h3">Population:{character.homeworld.population}</Typography>
      </Grid>
   
    </Grid>

    // <Grid container spacing={2}>
    //   <Grid item xs={12}>
    //     <Typography variant="h4">{character.name} {character.gender}</Typography>

    //   </Grid>

    // </Grid>
  );
};
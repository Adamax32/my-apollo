import { useQuery } from "@apollo/client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
import { Link } from "react-router-dom";
import { GET_ALL_FILMS } from "./queries";


import "@fontsource/parisienne";

export const FilmList = () => {
  const { data, error, loading } = useQuery(GET_ALL_FILMS);

  if (error) return <Typography variant="h5">{error.message}</Typography>;

  if (loading) return <Typography variant="body1">Loading...</Typography>;

  const films = data.allFilms.films;

  return (
    <Grid container spacing={2}>
      {films.map((film, i) => (
        <Grid item key={i} xs={25}>
          <Card>
            <CardContent>
           
              <Typography variant="h4" style={{  fontFamily:"'Times New Roman', serif", fontSize: '45px' }}>
                {film.title}
              </Typography>

              <Typography variant="subtitle" style={{  fontFamily:"'Times New Roman', serif", fontSize: '32px' }}>
                Release Date: {film.releaseDate}
              </Typography>
           
              <Typography variant="h2" style={{  fontFamily:"'Times New Roman', serif", fontSize: '28px' }}>
                Director: {film.director}
              </Typography>
              <Typography>
                Characters:
              </Typography>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>

                  <Typography variant="h2" style={{  fontFamily:"'Times New Roman', serif", fontSize: '22px', color: 'red' }}>
                    View Characters
                  </Typography>


                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {film.characterConnection.characters.map((character) => (
                      <li key={character.name}>
                        
                        <Typography variant="h2" style={{ fontFamily:"'Times New Roman', serif", fontSize: '22px' }}>
                          {character.name} : from {character.homeworld.name}
                        </Typography>

                        <CardActions>
                          <Link to={`/films/${character.id}`}>Check me Out!</Link>
                        </CardActions>

                      </li>
                    ))}
                  </ul>
                </AccordionDetails>
              </Accordion>


            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

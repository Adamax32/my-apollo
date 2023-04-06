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

// Import Parisienne font from Google Fonts
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
              {/* Use Parisienne font for title */}
              <Typography variant="h4" style={{ fontFamily: 'Parisienne', fontSize: '45px' }}>
                {film.title}
              </Typography>
              {/* Use Parisienne font for subtitle */}
              <Typography variant="subtitle" style={{ fontFamily: 'Parisienne', fontSize: '32px' }}>
                Release Date: {film.releaseDate}
              </Typography>
              {/* Use Parisienne font for director */}
              <Typography variant="h2" style={{ fontFamily: 'Parisienne', fontSize: '28px' }}>
                Director: {film.director}
              </Typography>
              <Typography>
                Characters:
              </Typography>

              <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  {/* Use Parisienne font for accordion summary */}
                  <Typography variant="h2" style={{ fontFamily: 'Parisienne', fontSize: '22px', color: 'red' }}>
                    View Characters
                  </Typography>


                </AccordionSummary>
                <AccordionDetails>
                  <ul>
                    {film.characterConnection.characters.map((character) => (
                      <li key={character.name}>
                        {/* Use Parisienne font for character name */}
                        <Typography variant="h2" style={{ fontFamily: 'Parisienne', fontSize: '22px' }}>
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

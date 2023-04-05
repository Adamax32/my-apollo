import { useQuery } from "@apollo/client";
import {
 // Accordion,
 // AccordionDetails,
  //AccordionSummary,
  Card,
  //CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
//import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from "react";
//import { Link } from "react-router-dom";
import { GET_ALL_STARSHIPS } from "./modules/films/queries";


export const StarshipList = () => {
    const { data, error, loading } = useQuery(GET_ALL_STARSHIPS);

    if (error)
        return <Typography variant="h5">{error.message}</Typography>;

    if (loading)
        return <Typography variant="body1">Loading...</Typography>;

    const starships = data.allStarships.starships;

    return (
        <Grid container spacing={2}>
            {starships.map((starship, i) => (
                <Grid item key={i} xs={25}>
                    <Card>
                        
                            <Typography variant="h4" style={{ fontFamily: 'Arial', fontSize: '16px' }}>
                                {starship.name}
                            </Typography>


                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

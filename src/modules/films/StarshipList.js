import { useQuery } from "@apollo/client";
import {

  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { GET_ALL_STARSHIPS } from "./queries";



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
                        
                            <Typography variant="h4" style={{ fontFamily:"'Times New Roman', serif", fontSize: '40px' }}>
                                {starship.name}
                            </Typography>

                            <CardActions>
                                <Link to={`/starships/${starship.id}`}>Ship Details!</Link>
                            </CardActions>


                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

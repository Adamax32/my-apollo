import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";

export const PlanetList = (props) => {
  const { planets } = props;
  return (
    <List>
      {planets.map((planet, i) => (
        <ListItem key={i}>
          <ListItemText
            primary={`Name: ${planet.name}`}
            secondary={`Diameter: ${planet.diameter} miles`}
          />
        </ListItem>
      ))}
    </List>
  );
};

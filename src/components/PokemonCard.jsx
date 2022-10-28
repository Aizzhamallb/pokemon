import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { pokemonsContext } from "../pokemonContext";
import { useNavigate } from "react-router-dom";

export default function MultiActionAreaCard() {
  const { onePokemon } = React.useContext(pokemonsContext);
  let navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={onePokemon.sprites.front_default}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {onePokemon.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => navigate(`/`)}>
          Home
        </Button>
      </CardActions>
    </Card>
  );
}

import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    heght: 250,
    margin: "auto",
  },
  media: {
    height: 215,
    alignItems: "center",
    marginBottom: "10px",
  },
  name: {
    backgroundColor: "brown",
    margin: "auto",
  },
});

const Pokelist = (props) => {
  const { pokemons } = props.data;
  const classes = useStyles();
  console.log(pokemons);
  return (
    <>
      <Grid container spacing={5}>
        {pokemons.map((pokemon) => {
          return (
            <Grid item xs={6} lg={4} key={pokemon.id}>
              <Card raised={true} varaint="outlined" className={classes.root}>
                <CardActionArea component={Link} to={`/pokemon/${pokemon.id}`}>
                  <CardMedia image={pokemon.image} className={classes.media} />
                  <CardActions className={classes.name}>
                    <Typography
                      align="center"
                      className={classes.name}
                      variant="h4"
                      gutterBottom={true}
                    >
                      {pokemon.name}
                    </Typography>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Pokelist;

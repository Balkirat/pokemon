import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Pokelist from "./components/Pokelist";
import Header from "./components/Header";
import { Grid, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Pokeinfo from "./components/Pokeinfo";

const POKEMON = gql`
  query Pokemons($first: Int!) {
    pokemons(first: $first) {
      name
      image
      id
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignSelf: "center",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "35ch",
      margin: "20px",
    },
  },
  pokemonContainer: {
    paddingTop: "20px",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
}));

function App() {
  const [first, setFirst] = useState(0);
  const classes = useStyles();
  const { loading, error, data } = useQuery(POKEMON, {
    variables: { first },
  });

  const handleChange = (e) => {
    console.log(e.target.value);
    setFirst(parseInt(e.target.value));
  };

  console.log(typeof first);

  return (
    <>
      <Header />

      <Router>
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                {" "}
                <Grid container justify="center">
                  <form className={classes.form} noValidate autoComplete="off">
                    {" "}
                    <TextField
                      id="standard-password-input"
                      label="How many Pokemon you want"
                      type="text"
                      autoComplete="current-password"
                      variant="outlined"
                      onChange={handleChange}
                    />
                  </form>
                </Grid>
                <Grid
                  container
                  className={classes.pokemonContainer}
                  justify="center"
                >
                  <div>
                    {error && (
                      <h1>Please Enter valid number of pokemon you want</h1>
                    )}
                    {!data || loading ? (
                      <div className={classes.root}>
                        <CircularProgress color="secondary" />
                      </div>
                    ) : (
                      <Pokelist data={data} />
                    )}
                  </div>
                </Grid>
              </>
            );
          }}
        />
        <Route path="/pokemon/:id" component={Pokeinfo} />
      </Router>
    </>
  );
}

export default App;

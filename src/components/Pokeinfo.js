import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const POKEINFO = gql`
  query Pokemon($Id: String) {
    pokemon(id: $Id) {
      name
      image
      weaknesses
      attacks {
        fast {
          name
          type
          damage
        }
      }
    }
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Pokeinfo = (props) => {
  const Id = props.match.params.id;
  const { loading, error, data } = useQuery(POKEINFO, {
    variables: { Id },
  });
  const classes = useStyles();
  console.log(data);
  return (
    <>
      <Grid container align="center" direction="column">
        <div>
          {error && <h1>Please Enter valid number of pokemon you want</h1>}
          {!data || loading ? (
            <div>
              <CircularProgress color="secondary" />
            </div>
          ) : (
            <>
              <Grid item xs={6}>
                <img src={data.pokemon.image} />
                <Paper className={classes.paper} variant="outlined" square>
                  {data.pokemon.name}
                </Paper>
              </Grid>
            </>
          )}
        </div>

        <div>
          <Button variant="outlined" color="secondary" component={Link} to="/">
            Back To Pokemon Page
          </Button>
        </div>
      </Grid>
    </>
  );
};

export default Pokeinfo;

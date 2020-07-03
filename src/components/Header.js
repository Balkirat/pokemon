import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AddAlarmIcon from "@material-ui/icons/AddAlarm";


const useStyles = makeStyles({
  typographyStyles: {
    flex: 1,
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            className={classes.typographyStyles}
            color="textPrimary"
            variant="h4"
          >
            Pokemon
          </Typography>
          <AddAlarmIcon />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;

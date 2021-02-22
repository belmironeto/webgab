import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Lista from './Lista';
import Details from './Details';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(2),
    alignContent: 'left',
  },
  sistema: {
    flexGrow: 1,
  },
}));

export default function SystemCard() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Lista />
      <Box className={classes.sistema}>
        <Details />
      </Box>
    </Box>
  );
}

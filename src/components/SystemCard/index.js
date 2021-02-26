import React, { useState, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import Details from './Details';
import { useSelector, useDispatch } from 'react-redux';
import { getAllSystems } from '../../actions/sistemasActions';

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
  const sist = useSelector((state) => state.sistemas).sistemas;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSystems());
  }, [dispatch]);

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.sistema}>
        <Details sistema={sist[0]} />
      </Box>
    </Box>
  );
}

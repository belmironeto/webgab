import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import SystemCard from '../../components/SystemCard';
import Lista from '../../components/Lista';
import { SystemProvider, SystemContext } from '../../context/SystemContext';
import { getSystemsByTAG } from '../../actions/sistemasActions';

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

export default function Sistemas() {
  const classes = useStyles();
  const ctx = useContext(SystemContext);
  const { pesquisa } = ctx;

  return (
    <Box className={classes.root}>
      <Lista />
      <SystemCard />
    </Box>
  );
}

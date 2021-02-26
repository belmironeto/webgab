import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { useSelector, useDispatch } from 'react-redux';

import SystemCard from '../../components/SystemCard';
import Lista from '../../components/Lista';
import { SystemProvider } from '../../context/SystemContext';
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

const environment = [
  {
    name: 'TotalBus',
    divisao: 'passageiros',
    description: 'Texto de Descrição',
  },
  {
    name: 'Benner',
    divisao: 'logistica',
    description: 'Benner',
  },
  {
    name: 'Sisdia',
    divisao: 'comercio',
  },
  {
    name: 'SAP',
    divisao: 'gab',
  },
  {
    name: 'NBS',
    divisao: 'comercio',
  },
  {
    name: 'Plataforma de Ativos',
    divisao: 'logistica',
  },
];

export default function Sistemas() {
  const classes = useStyles();

  const sist = useSelector((state) => state.sistemas).sistemas;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSystems());
  }, [dispatch]);

  return (
    <SystemProvider>
      <Box className={classes.root}>
        <Lista sistema={sist} />
        <SystemCard />
      </Box>
    </SystemProvider>
  );
}

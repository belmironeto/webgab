import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

import Container from '@material-ui/core/Container';

import Ambiente from './Ambiente';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textArea: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
    width: '50ch',
    textAlign: 'justify',
  },
  servidor: { marginRight: theme.spacing(1) },
}));

export default function Details() {
  const classes = useStyles();

  const TotalBus = {
    ambiente: 'PRD',
    banco: {
      tipo: 'oracle',
      name: 'TBUSPRD_DG',
      user: 'vtabol',
    },
    servers: [
      { id: 0, name: 'PSG13003i' },
      { id: 1, name: 'PSG13004i' },
      { id: 2, name: 'PSG13005i' },
      { id: 3, name: 'PSG13006i' },
      { id: 4, name: 'PSG13007i' },
      { id: 5, name: 'PSG13008i' },
    ],
  };
  const TotalBusHMG = {
    ambiente: 'HMG',
    banco: {
      tipo: 'oracle',
      name: 'TBUSQAS_DG',
      user: 'vtabol',
    },
    servers: [
      { id: 0, name: 'PSG20000i' },
      { id: 1, name: 'PSG20001i' },
      { id: 2, name: 'PSG20002i' },
      { id: 3, name: 'PSG20003i' },
    ],
  };

  const TotalBusDEV = {
    ambiente: 'DEV',
    banco: {
      tipo: 'oracle',
      name: 'TBUSDEV_DG',
      user: 'vtabol',
    },
    servers: [
      { id: 0, name: 'PSG20100i' },
      { id: 1, name: 'PSG20101i' },
      { id: 2, name: 'PSG20102i' },
      { id: 3, name: 'PSG20103i' },
    ],
  };

  return (
    <Container>
      <form className={classes.root}>
        <TextField
          label="Nome do Sistema"
          defaultValue="TotalBus"
          variant="outlined"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          label="Descrição do Sistema"
          multiline
          className={classes.textArea}
          defaultValue="Sistema de Venda de Passagens da Divisão Passageiros.A aplicação é em JAVA com banco de Dados Oracle e utiliza o JBOSS como WebServer.O balanceamento está sendo feito no F5"
          InputProps={{
            readOnly: true,
          }}
        />

        <TextField
          label="URL do Sistema"
          defaultValue="http://totalbus.aguiabranca.com.br"
          className={classes.textArea}
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />

        <Ambiente environment={TotalBus} />
        <Ambiente environment={TotalBusHMG} />
        <Ambiente environment={TotalBusDEV} />
      </form>
    </Container>
  );
}

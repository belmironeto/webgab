import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NativeSelect from '@material-ui/core/NativeSelect';
import Box from '@material-ui/core/Box';

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
  },
  areas: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  paper: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  servidores: {
    marginTop: theme.spacing(1),
  },
}));

export default function Ambiente({ environment }) {
  const corAmbiente = {
    PRD: 'darkOrange',
    HMG: 'forestGreen',
    DEV: 'lightPink',
  };

  const classes = useStyles();
  return (
    <Paper
      className={classes.areas}
      style={{ backgroundColor: corAmbiente[environment.ambiente] }}
    >
      <FormControl className={classes.areas}>
        <InputLabel>Ambiente</InputLabel>
        <NativeSelect defaultValue={environment.ambiente}>
          <option value="PRD">PRD</option>
          <option value="HMG">HMG</option>
          <option value="DEV">DEV</option>
        </NativeSelect>
      </FormControl>

      <FormControl className={classes.areas}>
        Servidores
        {environment.servers.map((servidor) => (
          <Button
            variant="outlined"
            key={`item-${servidor.id}-${servidor.name}`}
            className={classes.servidores}
          >
            {servidor.name}
          </Button>
        ))}
      </FormControl>

      <FormControl className={classes.areas}>
        <InputLabel>Banco de Dados</InputLabel>
        <NativeSelect defaultValue={environment.banco.tipo}>
          <option value="oracle">Oracle</option>
          <option value="sqlserver">SQL Server</option>
          <option value="informix">Informix</option>
        </NativeSelect>
        <TextField
          label="Nome do Banco de Dados"
          defaultValue={environment.banco.name}
          className={classes.textArea}
        />
        <TextField
          label="Nome do usuário do BD"
          defaultValue={environment.banco.user}
          className={classes.textArea}
        />
      </FormControl>
    </Paper>
  );
}

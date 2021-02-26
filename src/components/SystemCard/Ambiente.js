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
    width: '600px',
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
    maxWidth: '500px',
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

export default function Ambiente({ amb }) {
  const corAmbiente = {
    PRD: 'darkOrange',
    HMG: 'forestGreen',
    DEV: 'lightPink',
  };

  const classes = useStyles();

  return (
    <Paper
      className={classes.areas}
      style={{ backgroundColor: corAmbiente[amb.name] }}
    >
      <FormControl className={classes.areas}>
        <InputLabel>Ambiente</InputLabel>
        <NativeSelect defaultValue={amb.name}>
          <option value="PRD">PRD</option>
          <option value="HMG">HMG</option>
          <option value="DEV">DEV</option>
        </NativeSelect>
      </FormControl>

      <FormControl className={classes.areas}>
        Servidores
        {amb.servers.map((server) => (
          <Button
            variant="outlined"
            key={server.toString()}
            className={classes.servidores}
          >
            {server}
          </Button>
        ))}
      </FormControl>

      <FormControl className={classes.areas}>
        <InputLabel>Banco de Dados</InputLabel>
        <NativeSelect defaultValue={amb.banco.type}>
          <option value="oracle">Oracle</option>
          <option value="sqlserver">SQL Server</option>
          <option value="informix">Informix</option>
        </NativeSelect>
        <TextField
          label="Nome do Banco de Dados"
          multiline
          defaultValue={amb.banco.name}
          className={classes.textArea}
        />
        <TextField
          label="Nome do usuário do BD"
          defaultValue={amb.banco.user}
          className={classes.textArea}
        />
      </FormControl>
    </Paper>
  );
}

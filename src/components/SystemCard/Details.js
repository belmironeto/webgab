import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import { SystemContext } from '../../context/SystemContext';

import Ambiente from './Ambiente';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: theme.spacing(2),
    maxWidth: '500px',
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

export default function Details(sist) {
  const sistema = sist.sistema;

  const classes = useStyles();
  const ctx = useContext(SystemContext);
  const {
    name,
    setName,
    url,
    setUrl,
    description,
    setDescription,
    environment,
    setEnvironment,
  } = ctx;

  return (
    <Container>
      <form className={classes.root}>
        <TextField
          label="Nome do Sistema"
          value={name}
          onChange={setName}
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
          value={description}
          onChange={setDescription}
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          label="URL do Sistema"
          value={url}
          className={classes.textArea}
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />

        {environment?.map((ambiente) => {
          return <Ambiente amb={ambiente} key={ambiente._id} />;
        })}
      </form>
    </Container>
  );
}

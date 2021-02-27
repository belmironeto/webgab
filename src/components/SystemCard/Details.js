import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { SystemContext } from '../../context/SystemContext';
import Button from '@material-ui/core/Button';

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
    flexGrow: 1,
  },
  tags: {
    flexDirection: 'row',
  },
  servidor: { marginRight: theme.spacing(1) },
  Tag: {
    textTransform: 'none',
    marginTop: 0,
  },
  TagTitle: {
    fontSize: '1rem',
    fontWeight: 400,
    transform: 'translate(0.5px) scale(0.75)',
    top: 0,
    left: 0,
    transformOrigin: 'top left',
    color: 'rgba(0,0,0,0.54)',
    marginTop: theme.spacing(1),
    marginBottom: 0,
  },
}));

export default function Details() {
  //const sistema = sist.sistema;

  const classes = useStyles();
  const ctx = useContext(SystemContext);
  const {
    name,
    setName,
    url,
    description,
    setDescription,
    environment,
    tags,
    setPesquisa,
  } = ctx;

  const handleTagSelection = (item) => {
    item = item.target.innerHTML.substring(1, item.length);
    setPesquisa(item);
  };

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
        <Box className={classes.tags}>
          <div className={classes.TagTitle}>TAGs</div>
          {tags.map((item) => (
            <Button
              key={item}
              className={classes.Tag}
              onClick={handleTagSelection}
            >{`#${item}`}</Button>
          ))}
        </Box>
        {environment?.map((ambiente) => {
          return <Ambiente amb={ambiente} key={ambiente._id} />;
        })}
      </form>
    </Container>
  );
}

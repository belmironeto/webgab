import React, { useState, useContext } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Avatar from '@material-ui/core/Avatar';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';
import EditIcon from '@material-ui/icons/Edit';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

import { SystemContext } from '../../context/SystemContext';

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),

    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  passageiros: {
    backgroundColor: 'firebrick',
    marginRight: theme.spacing(1),
  },
  logistica: {
    backgroundColor: 'green',
    marginRight: theme.spacing(1),
  },
  comercio: {
    backgroundColor: 'darkblue',
    marginRight: theme.spacing(1),
  },
  gab: {
    backgroundColor: 'darkorange',
    marginRight: theme.spacing(1),
  },
  buttonRed: {
    backgroundColor: '#f44336',
    color: 'white',

    '&:hover, &:focus buttonRed': {
      backgroundColor: '#FF0033',
      color: 'black',
    },
  },
  buttonGreen: {
    backgroundColor: '#4CAF50',

    color: 'white',
    '&:hover, &:focus buttonRed': {
      backgroundColor: '#00FF00',
      color: 'black',
    },
  },
  buttonBlue: {
    backgroundColor: '#008CBA',

    color: 'white',
    '&:hover, &:focus buttonRed': {
      backgroundColor: '#008C',
      color: 'black',
    },
  },
  searchButton: {
    width: '100px',
  },
}));

const corDivisao = {
  passageiros: 'firebrick',
  logistica: 'green',
  comercio: 'darkblue',
  gab: 'darkorange',
};
export default function Lista(sist) {
  const sistemas = sist?.sistema;

  const classes = useStyles();

  const ctx = useContext(SystemContext);
  const {
    name,
    setName,
    setDescription,
    divisao,
    setUrl,
    setEnvironment,
  } = ctx;

  const [selectedSystem, setSelectedSystem] = useState(null);

  const handleListItemClick = (system, index) => {
    setSelectedSystem(index);
    setName(system.name);
    setDescription(system.description);
    setEnvironment(system.environment);
    setUrl(system.url);
  };

  return (
    <Box className={classes.root}>
      <ButtonGroup>
        <Button className={classes.buttonGreen}>
          <SvgIcon>
            <AddIcon />
          </SvgIcon>
        </Button>

        <Button className={classes.buttonBlue}>
          <SvgIcon>
            <EditIcon />
          </SvgIcon>
        </Button>
        <Button>
          <TextField
            className={classes.searchButton}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Button>
        <Button className={classes.buttonRed}>
          <SvgIcon>
            <DeleteIcon />
          </SvgIcon>
        </Button>
      </ButtonGroup>
      <List component="nav">
        {sistemas?.map((sistema, index) => {
          return (
            <ListItem
              button
              selected={selectedSystem === index}
              onClick={() => handleListItemClick(sistema, index)}
              key={sistema.name}
            >
              <Avatar
                alt={sistema.divisao}
                style={{
                  background: corDivisao[sistema.divisao],
                  margin: '5px',
                }}
              />
              <ListItemText primary={sistema.name} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

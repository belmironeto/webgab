import React, { useState, useContext, useEffect } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';

import { getSystemsByTAG } from '../../actions/sistemasActions';

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
    backgroundColor: '#ef9a9a',
    color: 'white',

    '&:hover, &:focus buttonRed': {
      backgroundColor: '#f44336',
      color: 'black',
    },
  },
  buttonGreen: {
    backgroundColor: '#a5d6a7',

    color: 'white',
    '&:hover, &:focus buttonRed': {
      backgroundColor: '#4caf50',
      color: 'black',
    },
  },
  buttonBlue: {
    backgroundColor: '#90caf9',

    color: 'white',
    '&:hover, &:focus buttonRed': {
      backgroundColor: '#2196f3',
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
export default function Lista() {
  const classes = useStyles();
  const sistemas = useSelector((state) => state.sistemas).sistemas;

  const ctx = useContext(SystemContext);
  const {
    name,
    setName,
    setDescription,
    divisao,
    setUrl,
    setEnvironment,
    setPesquisa,
    pesquisa,

    tags,
    setTags,
  } = ctx;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSystemsByTAG(pesquisa));
  }, [dispatch, pesquisa]);

  const [selectedSystem, setSelectedSystem] = useState(null);

  const handleListItemClick = (system, index) => {
    setSelectedSystem(index);
    setName(system.name);
    setDescription(system.description);
    setEnvironment(system.environment);
    setUrl(system.url);
    setTags(system.tags);
  };

  const handleTypeSearch = (event) => {
    setPesquisa(event.target.value);
  };

  return (
    <Box className={classes.root}>
      <ButtonGroup>
        <Button
          variant="contained"
          disableElevation
          className={classes.buttonGreen}
        >
          <SvgIcon>
            <AddIcon />
          </SvgIcon>
        </Button>

        <Button
          className={classes.buttonBlue}
          variant="contained"
          disableElevation
        >
          <SvgIcon>
            <EditIcon />
          </SvgIcon>
        </Button>
        <Button variant="contained" disableElevation>
          <TextField
            className={classes.searchButton}
            value={pesquisa}
            onChange={handleTypeSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Button>
        <Button
          className={classes.buttonRed}
          variant="contained"
          disableElevation
        >
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
              key={sistema?.name}
            >
              <Avatar
                alt={sistema?.divisao}
                style={{
                  background: corDivisao[sistema?.divisao],
                  margin: '5px',
                }}
              />
              <ListItemText primary={sistema?.name} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
}

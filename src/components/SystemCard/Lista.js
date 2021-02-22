import React from 'react';
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

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    zIndex: theme.zIndex.drawer + 1,
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

export default function Lista() {
  const classes = useStyles();
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
        <ListItem button selected>
          <Avatar className={classes.passageiros}>P</Avatar>
          <ListItemText primary="TotalBus" />
        </ListItem>
        <ListItem button>
          <Avatar className={classes.logistica}>L</Avatar>
          <ListItemText primary="Benner" />
        </ListItem>
        <ListItem button>
          <Avatar className={classes.comercio}>C</Avatar>
          <ListItemText primary="Sisdia" />
        </ListItem>
        <ListItem button>
          <Avatar className={classes.gab}>G</Avatar>
          <ListItemText primary="SAP" />
        </ListItem>
      </List>
    </Box>
  );
}

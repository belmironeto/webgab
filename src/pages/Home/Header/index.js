import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';

import Account from './Account';
import Notification from './Notification';
import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
  root: {},
  img: {
    maxWidth: '200px',
    marginLeft: 0,
  },
  grow: {
    flexGrow: 1,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <Menu />
          <Link to="/">
            <img src="/images/icons/logo.png" className={classes.img} />
          </Link>
          <Box className={classes.grow} />
          <Box className={classes.userSection}>
            <Notification />
            <Account />
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}

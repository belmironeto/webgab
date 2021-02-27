import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import MenuLateral from './MenuLateral';
import { CssBaseline } from '@material-ui/core';
import { Routes, Route } from 'react-router-dom';

import Sistemas from '../Sistemas';
import { SystemProvider } from '../../context/SystemContext';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  content: {
    flexGrow: 1,
    marginTop: '64px',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <MenuLateral />
      <main className={classes.content}>
        <Routes>
          <Route path="/" element={<h1>"Home"</h1>} />
          <Route
            path="/sistemas"
            element={
              <SystemProvider>
                <Sistemas />
              </SystemProvider>
            }
          />
          <Route path="/*" element={<h1>Page not Fount - 404!</h1>} />
        </Routes>
      </main>
    </div>
  );
}

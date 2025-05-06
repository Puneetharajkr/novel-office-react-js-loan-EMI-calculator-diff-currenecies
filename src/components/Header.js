import React, { useContext } from 'react';
import { AppBar, Toolbar, Typography, Switch, Button } from '@mui/material';
import { GlobalContext } from '../context/GlobalContext';

const Header = () => {
  const { darkMode, setDarkMode } = useContext(GlobalContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Loan Calculator App
        </Typography>
        <Button color="inherit" href="/">Home</Button>
        <Button color="inherit" href="/error">Error Page</Button>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
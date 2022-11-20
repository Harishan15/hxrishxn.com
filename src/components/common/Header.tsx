import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleDarkMode } from '../../slices/appSlice';

const Header = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.app.darkMode);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuRoundedIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Hxrishxn
          </Typography>
          <IconButton
            aria-label="dark mode"
            onClick={() => dispatch(toggleDarkMode())}
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

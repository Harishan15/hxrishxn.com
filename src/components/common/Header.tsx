import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

import Image from 'next/image';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { toggleDarkMode } from '../../slices/appSlice';
import { HxMenuIcon } from './Icons';

const Header = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((state) => state.app.darkMode);

  return (
    <AppBar
      position="fixed"
      sx={{ bgcolor: '#ffffff99', flexGrow: 1, backdropFilter: 'blur(10px)' }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <HxMenuIcon />
        </IconButton>

        <Typography variant="h6" component="div">
          Hxrishxn
        </Typography>

        <IconButton
          aria-label="dark mode"
          onClick={() => dispatch(toggleDarkMode())}
          sx={{ mr: 2 }}
        >
          {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

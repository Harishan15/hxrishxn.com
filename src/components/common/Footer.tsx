import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useAppSelector } from '../../hooks';

const Footer = () => {
  const darkMode = useAppSelector((state) => state.app.darkMode);

  return (
    <Box sx={{ bgcolor: darkMode ? '#222' : '#eee' }}>
      <Container>
        <Typography>All rights not reserved yet.</Typography>
      </Container>
    </Box>
  );
};
export default Footer;

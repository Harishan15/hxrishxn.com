import { Box } from '@mui/material';
import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <Box component="main">{children}</Box>
      <Footer />
    </>
  );
};

export default MainLayout;

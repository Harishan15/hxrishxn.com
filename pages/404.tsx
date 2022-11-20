import React, { useState } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { NextPage } from 'next';
import Link from 'next/link';
import MainLayout from '../src/layout/MainLayout';

const ErrorPage: NextPage = () => {
  return (
    <MainLayout>
      <Container>
        <Box
          sx={{
            display: 'flex',
            height: '100vh',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>
              Page Not Found
            </Typography>
            <Link href="/">Go Home</Link>
          </Box>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default ErrorPage;

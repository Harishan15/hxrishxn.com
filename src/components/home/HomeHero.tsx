import { Box, Typography, Container } from '@mui/material';
import React from 'react';
import Image from 'next/image';

const HomeHero: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 80px)',
        backgroundColor: 'hsla(0,0%,100%,1)',
        backgroundImage:
          'radial-gradient(at 47% 65%, hsla(60,100%,91%,1) 0px, transparent 50%),radial-gradient(at 0% 87%, hsla(69,100%,85%,1) 0px, transparent 50%),radial-gradient(at 100% 8%, hsla(343,100%,92%,1) 0px, transparent 50%)',
      }}
    >
      {/* <Image src="" alt="" layout="fill" /> */}
      <Container>
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: '0px',
            left: '0px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Box>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '3rem', md: '5rem', lg: '6rem' },
                mb: { xs: '1rem', md: '1.4rem', lg: '1rem' },
              }}
            >
              Hxrishxn
            </Typography>
            <Typography>
              A personal web application for Harishan Rajendrakumar
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeHero;

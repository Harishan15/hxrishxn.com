import { Box, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';

const bgcolor = [
  {
    bgcolor: 'hsla(167,0%,100%,1)',
    bgImage:
      'radial-gradient(at 32% 89%, hsla(166,100%,73%,0.36) 0px, transparent 50%),radial-gradient(at 13% 14%, hsla(262,95%,73%,0.31) 0px, transparent 50%),radial-gradient(at 76% 91%, hsla(254,68%,71%,0.12) 0px, transparent 50%),radial-gradient(at 94% 51%, hsla(323,100%,50%,0.16) 0px, transparent 50%)',
  },
  {
    bgcolor: 'hsla(167,0%,100%,1)',
    bgImage:
      'radial-gradient(at 18% 82%, hsla(23,100%,50%,0.25) 0px, transparent 50%), radial-gradient(at 13% 14%, hsla(191,94%,73%,0.31) 0px, transparent 50%), radial-gradient(at 74% 96%, hsla(181,68%,71%,0.27) 0px, transparent 50%), radial-gradient(at 95% 35%, hsla(72,100%,50%,0.25) 0px, transparent 50%)',
  },
  {
    bgcolor: 'hsla(167,0%,100%,1)',
    bgImage:
      'radial-gradient(at 18% 82%, hsla(76,100%,64%,0.45) 0px, transparent 50%), radial-gradient(at 13% 14%, hsla(191,100%,62%,0.31) 0px, transparent 50%), radial-gradient(at 74% 96%, hsla(240,100%,72%,0.27) 0px, transparent 50%), radial-gradient(at 95% 35%, hsla(72,90%,55%,0.37) 0px, transparent 50%)',
  },
];

const LinkCard: React.FC<{
  title: string;
  description: string;
  image: string;
  gridNo: number;
}> = ({ title, description, image, gridNo }) => {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: bgcolor[gridNo].bgcolor,
        backgroundImage: bgcolor[gridNo].bgImage,
        width: '100%',
        minHeight: '400px',
        height: '100%',
        border: '1px solid #000',
        boxShadow: '4px 4px 0px #222222',
        '&:hover': {
          boxShadow: '8px 8px 0px #222222',
        },
      }}
    >
      <CardContent
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          gap: 2,
          height: '100%',
          width: '100%',
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ mb: 1.2 }}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: '#222' }}>
            {description}
          </Typography>
        </Box>

        <Box
          sx={{
            width: '100%',
            height: '200px',
            position: 'relative',
            '> span, img': {
              borderRadius: '10px',
              border: '1px solid #999',
            },
          }}
        >
          <Image
            src={image}
            alt={title}
            // width={300}
            // height={200}
            layout="fill"
            objectFit="cover"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default LinkCard;

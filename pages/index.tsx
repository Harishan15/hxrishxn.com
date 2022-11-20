import { Box } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import HomeHero from '../src/components/home/HomeHero';
import MainLayout from '../src/layout/MainLayout';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>Home - Official online space of Harishan Rajendrakumar</title>
        <meta
          name="description"
          content="Home - Official online space of Harishan Rajendrakumar"
        />
        <meta
          name="description"
          content="Official online space of Harishan Rajendrakumar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <HomeHero />
      </MainLayout>
    </Box>
  );
}

import { Box, Container, Grid } from '@mui/material';
import React from 'react';
import LinkCard from './micro-components/LinkCard';

const HomeLinksLayout = () => {
  return (
    <Box sx={{ mt: 4 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <LinkCard
              title="Vibranium"
              description="The strongest metal on Earth. It is used on Captain America's Shield nad Black Panther's suit. One of the rarest metal on Marvel Cinematic Universe."
              image="https://images.unsplash.com/photo-1635492491273-455af7728453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              gridNo={0}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LinkCard
              title="Ultron"
              description="A murder bot which created by Tony Stark with collaboration with Bruce Banner aka Hulk. A remarkable dialogue he said was 'Keep your friends rich and your enemies rich and wait to find out which is which.'"
              image="https://images.unsplash.com/photo-1655720845034-b8f615109b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              gridNo={1}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LinkCard
              title="Tony Stark"
              description="'We're the Avengers. We can bust arms dealers all the livelong day, but that up there, that's,. that's the Endgame.'"
              image="https://images.unsplash.com/photo-1627905881338-1143151b9a0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              gridNo={2}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LinkCard
              title="Blog Posts"
              description="Read short notes written by myself for chucks of quick do tasks. Read it or Bookmark it for future use. Give your comments to it."
              image="https://images.unsplash.com/photo-1629450646259-1497be420f99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
              gridNo={0}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <LinkCard
              title="Credits"
              description=""
              image="https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
              gridNo={0}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeLinksLayout;

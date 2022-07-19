import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Home = () => {
  return (
    <Box mx={2}>
      <Card sx={{ textAlign: 'center', m: 2, boxShadow: 0 }}>
        {/* <CardHeader
          title="Astoria Cocktail Room
"
        ></CardHeader> */}
        <CardMedia
          component="img"
          width={100}
          image="https://raw.githubusercontent.com/GeoHaz7/Astoria-Cocktail-Room/main/src/images/background.jpg"
          alt="background"
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary">
            Enter the dazzling era of the 1920’s inside Astoria Cocktail Room.
            We’ve saved you a seat 🪑
          </Typography>
        </CardContent>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button variant="contained" size="large">
            <a
              style={{ textDecoration: 'none', color: '#fff' }}
              href="tel:0566 009 199
"
            >
              Call To Reserve{' '}
              <span role="img" aria-label="">
                ☎️
              </span>
            </a>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Home;

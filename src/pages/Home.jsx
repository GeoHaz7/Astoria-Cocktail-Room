import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import background from '../images/292579554_454848309980323_5888373031991334788_n.jpg';

const Home = () => {
  return (
    <Box mx={2}>
      <Card sx={{ textAlign: 'center', m: 2 }}>
        {/* <CardHeader
          title="Astoria Cocktail Room
"
        ></CardHeader> */}
        <CardMedia
          component="img"
          width={100}
          image={background}
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

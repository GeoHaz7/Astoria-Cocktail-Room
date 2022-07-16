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
import background from '../images/background.jpg';

const Home = () => {
  return (
    <Box mx={2}>
      <Card sx={{ textAlign: 'center' }}>
        <CardHeader
          title="Astoria Cocktail Room
"
        ></CardHeader>
        <CardMedia
          component="img"
          width={100}
          image={background}
          alt="background"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Enter the dazzling era of the 1920’s inside Astoria Cocktail Room.
            We’ve saved you a seat 🪑
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Home;

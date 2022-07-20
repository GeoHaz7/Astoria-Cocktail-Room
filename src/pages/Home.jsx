import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import CallIcon from '@mui/icons-material/Call';

const Home = () => {
  return (
    <Box mx={2}>
      <Card className="homeCard" sx={{ boxShadow: 0 }}>
        <CardMedia
          component="img"
          width={100}
          image="https://raw.githubusercontent.com/GeoHaz7/Astoria-Cocktail-Room/main/src/images/background.jpg"
          alt="homeImage"
        />

        <CardContent>
          <Typography fontFamily="serif" variant="h5" color="text.secondary">
            Enter the dazzling era of the 1920’s inside Astoria Cocktail Room.
            We’ve saved you a seat 🪑
          </Typography>
        </CardContent>

        <CardActions style={{ justifyContent: 'center' }}>
          <Button variant="contained" size="large">
            <Link
              href="tel:0566 009 199"
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              Call To Reserve {/* <CallIcon /> */}
              <span role="img" aria-label="">
                ☎️
              </span>
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Home;

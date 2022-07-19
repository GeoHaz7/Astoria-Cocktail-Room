import { Button, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import React from 'react';

const Footer = () => {
  return (
    <Grid
      bgcolor="rgb(25,118,210,100)"
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        position: 'absolute',
        bottom: '0',
        width: '100%',
      }}
    >
      <Grid item marginLeft={1}>
        <Typography color="white" variant="span">
          &copy;Astoria Cocktail Room 2022
        </Typography>
      </Grid>
      <Grid item marginRight={1}>
        <Box display="inline" sx={{ textAlign: 'right' }}>
          <Button sx={{ padding: 1, minWidth: 0 }}>
            <Link href="https://www.facebook.com/AstoriaCocktailRoom">
              {' '}
              <FacebookIcon sx={{ color: 'white' }} />
            </Link>
          </Button>
          <Button sx={{ padding: 1, minWidth: 0 }}>
            <Link href="https://www.instagram.com/astoriacocktailroom/?hl=en">
              {' '}
              <InstagramIcon sx={{ color: 'white' }} />
            </Link>
          </Button>
          <Button sx={{ padding: 1, minWidth: 0 }}>
            <Link href="https://wa.me/972504554429">
              {' '}
              <WhatsAppIcon sx={{ color: 'white' }} />
            </Link>
          </Button>
          <Button sx={{ padding: 1, minWidth: 0 }}>
            <Link href="https://www.google.com/maps/place/Astoria+Cocktail+Room/@31.7021198,35.2088136,17z/data=!3m1!4b1!4m5!3m4!1s0x1502d9a2800b1d79:0x8dfa9b23406a96fc!8m2!3d31.7021198!4d35.2110023">
              {' '}
              <LocationOnIcon sx={{ color: 'white' }} />
            </Link>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;

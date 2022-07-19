import { Button, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

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
      <Grid item marginLeft={2}>
        <Typography color="white" variant="span">
          &copy;Astoria Cocktail Room 2022
        </Typography>
      </Grid>
      <Grid item marginRight={2}>
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
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;

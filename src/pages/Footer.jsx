import { Favorite, LocationOn, Restore } from '@mui/icons-material';
import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Button>
          <Restore />
        </Button>
        <Button>
          <LocationOn />
        </Button>{' '}
        <Button>
          <Favorite />
        </Button>{' '}
      </BottomNavigation>
    </Box>
  );
};

export default Footer;

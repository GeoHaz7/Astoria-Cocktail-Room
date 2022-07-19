import { Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import Image from './Images';

const Photos = () => {
  const buttons = ['Food', 'Drinks', 'Events'];
  const [chosen, setChosen] = useState('Food');
  const handleClick = (event) => {
    setChosen(event.currentTarget.id);
  };

  return (
    <Box
      my={2}
      sx={{
        flexGrow: 1,
        textAlign: 'center',
      }}
      justifyContent="space-between"
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {buttons.map((button) => (
          <Grid item xs={4}>
            <Box sx={{ flexGrow: 1 }}>
              <Button id={button} onClick={handleClick} variant="contained">
                {button}
              </Button>
            </Box>
          </Grid>
        ))}
        <Image path={chosen} />
      </Grid>
    </Box>
  );
};

export default Photos;

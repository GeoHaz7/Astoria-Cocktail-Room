import { Box, Button, Grid } from '@mui/material';
import React, { useState } from 'react';
import Image from './Images';

const Photos = () => {
  const buttons = ['Food', 'Drinks', 'Events'];
  const [chosen, setChosen] = useState('');
  const handleClick = (event) => {
    setChosen(event.currentTarget.id);
  };

  return (
    <Box my={1} sx={{ flexGrow: 1 }}>
      <Grid container>
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

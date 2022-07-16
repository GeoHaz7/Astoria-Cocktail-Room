import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/system';

export default function Images(props) {
  function importAll(r) {
    let images = {};
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  }

  console.log(props);

  const images = props.path
    ? importAll(require.context(props.path, false, /\.(png|jpe?g|svg)$/))
    : '';

  return (
    <Box m={5}>
      <ImageList
        // style={{ overflow: 'hidden' }}
        // sx={{ width: 500, height: 450 }}
        cols={2}
      >
        {Object.keys(images).map(function (key, index) {
          return (
            <ImageListItem key={key}>
              <img
                src={images[key]}
                srcSet={`${key}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={key}
                loading="lazy"
              />
            </ImageListItem>
          );
        })}
      </ImageList>
    </Box>
  );
}

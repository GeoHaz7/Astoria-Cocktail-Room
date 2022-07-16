import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/system';

export default function Images({ path }) {
  function importAll(r) {
    let imageObj = {};
    r.keys().map((item, index) => {
      imageObj[item.replace('./', '')] = r(item);
    });
    return imageObj;
  }

  const Food = importAll(
    require.context(`../images/Food`, false, /\.(png|jpe?g|svg)$/)
  );
  const Events = importAll(
    require.context(`../images/Events`, false, /\.(png|jpe?g|svg)$/)
  );
  const Drinks = importAll(
    require.context(`../images/Drinks`, false, /\.(png|jpe?g|svg)$/)
  );

  console.log(Events);

  return (
    <Box m={5}>
      {path === 'Food' && (
        <ImageList
          // style={{ overflow: 'hidden' }}
          // sx={{ width: 500, height: 450 }}
          cols={2}
        >
          {Object.keys(Food).map(function (key, index) {
            return (
              <ImageListItem key={key}>
                <img
                  src={Food[key]}
                  srcSet={`${key}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={key}
                  loading="lazy"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      )}

      {path === 'Drinks' && (
        <ImageList
          // style={{ overflow: 'hidden' }}
          // sx={{ width: 500, height: 450 }}
          cols={2}
        >
          {Object.keys(Drinks).map(function (key, index) {
            return (
              <ImageListItem key={key}>
                <img
                  src={Drinks[key]}
                  srcSet={`${key}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={key}
                  loading="lazy"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      )}
      {path === 'Events' && (
        <ImageList
          // style={{ overflow: 'hidden' }}
          // sx={{ width: 500, height: 450 }}
          cols={2}
        >
          {Object.keys(Events).map(function (key, index) {
            return (
              <ImageListItem key={key}>
                <img
                  src={Events[key]}
                  srcSet={`${key}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={key}
                  loading="lazy"
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      )}
    </Box>
  );
}

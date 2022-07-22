import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/system';
import { Modal } from '@mui/material';

export default function Images({ path }) {
  function importAll(r) {
    let imageObj = {};
    // eslint-disable-next-line array-callback-return
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

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    maxWidth: '50vh',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState('');
  const handleOpen = (event) => {
    setOpen(true);
    setImage(event.target.currentSrc);
  };
  const handleClose = () => setOpen(false);

  const breakpoints = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  };

  const getColumns = (width) => {
    if (width < breakpoints.sm) {
      return 2;
    } else if (width < breakpoints.md) {
      return 3;
    } else if (width < breakpoints.lg) {
      return 6;
    } else if (width < breakpoints.xl) {
      return 7;
    } else {
      return 8;
    }
  };

  const [columns, setColumns] = React.useState(getColumns(window.innerWidth));
  const updateDimensions = () => {
    setColumns(getColumns(window.innerWidth));
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img style={style} src={image} alt="test" />
        </Box>
      </Modal>
      <Box m={2}>
        {path === 'Food' && (
          <ImageList
            // style={{ overflow: 'hidden' }}
            // sx={{ width: 500, height: 450 }}
            cols={columns}
          >
            {Object.keys(Food).map(function (key, index) {
              return (
                <ImageListItem key={key}>
                  <img
                    onClick={handleOpen}
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
            cols={columns}
          >
            {Object.keys(Drinks).map(function (key, index) {
              return (
                <ImageListItem key={key}>
                  <img
                    onClick={handleOpen}
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
            cols={columns}
          >
            {Object.keys(Events).map(function (key, index) {
              return (
                <ImageListItem key={key}>
                  <img
                    onClick={handleOpen}
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
    </>
  );
}

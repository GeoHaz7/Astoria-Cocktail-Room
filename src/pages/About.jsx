import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Modal,
  Typography,
} from '@mui/material';
import React from 'react';

import owners from '../images/staff/owners.jpg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '50vh',
};

const About = () => {
  const [open, setOpen] = React.useState(false);
  const [image, setImage] = React.useState('');
  const handleOpen = (event) => {
    setOpen(true);
    setImage(event.target.currentSrc);
  };
  const handleClose = () => setOpen(false);

  const data = [
    {
      name: 'Rawan Ghawali',
      imagePath:
        'https://raw.githubusercontent.com/GeoHaz7/Astoria-Cocktail-Room/main/src/images/staff/rawan.jpg',
    },
    {
      name: 'Celine Kort',
      imagePath:
        'https://raw.githubusercontent.com/GeoHaz7/Astoria-Cocktail-Room/main/src/images/staff/celine.jpg',
    },
    {
      name: 'Raed Kattan',
      imagePath:
        'https://raw.githubusercontent.com/GeoHaz7/Astoria-Cocktail-Room/main/src/images/staff/raed.jpg',
    },
    {
      name: 'Yazan Khater',
      imagePath:
        'https://raw.githubusercontent.com/GeoHaz7/Astoria-Cocktail-Room/main/src/images/staff/yazan.jpg',
    },
    {
      name: 'Ala Bannoura',
      imagePath:
        'https://raw.githubusercontent.com/GeoHaz7/Astoria-Cocktail-Room/main/src/images/staff/ala.jpg',
    },
  ];

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box>
          <img style={style} src={image} alt="test" />
        </Box>
      </Modal>

      <Grid
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        direction="row"
        container
      >
        {/* <Grid m={2} mx={5} item xs={12}>
          <Typography sx={{ marginBottom: 3 }} component="h3" variant="h3">
            About Astoria
          </Typography>
          <Typography textAlign="justify" variant="body" component="h3">
            1931, the year the cocktail world introduced its newest addition
            'The Astoria Cocktail'. This wet martini recipe was created in the
            Peacock Alley restaurant which was added to the old bar book, and
            ever since has become a staple classic drink in bars worldwide.
          </Typography>
        </Grid> */}

        {/* <Grid m={2} item xs={6}>
          <img
            style={{ maxHeight: '30vh' }}
            src="https://raw.githubusercontent.com/GeoHaz7/Astoria-Cocktail-Room/main/src/images/astoriaCocktial.jpg"
            alt="cocktail"
          />
        </Grid> */}

        <Grid m={2} item xs={12}>
          <Typography fontFamily="san-serif" variant="h3">
            Staff
          </Typography>
        </Grid>

        <Grid m={2} item xs={9} justifyContent="center" container>
          <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
            <CardHeader
              sx={{ py: 1, px: 0, bgcolor: 'rgb(25,118,210,100)' }}
              titleTypographyProps={{ color: 'white' }}
              title="Owners"
            ></CardHeader>
            <CardActionArea onClick={handleOpen}>
              <CardMedia component="img" image={owners} alt="green iguana" />
              <CardContent sx={{ bgcolor: 'rgb(25,118,210,100)' }}>
                <Typography variant="body2" color="white">
                  Jubran-Nineveh Kort
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        {data.map((item) => (
          <Grid
            my={5}
            item
            xs={9}
            md={6}
            lg={4}
            justifyContent="center"
            container
          >
            <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
              <CardActionArea onClick={handleOpen}>
                <CardMedia component="img" image={item.imagePath} />
                <CardContent sx={{ bgcolor: 'rgb(25,118,210,100)' }}>
                  <Typography variant="body2" color="white">
                    {item.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        <Grid m={2} item xs={12}>
          <Typography fontFamily="san-serif" variant="h3">
            Location
          </Typography>
        </Grid>
        <Grid m={5} item xs={9}>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.504183308078!2d35.208813615110174!3d31.702119781309918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d9a2800b1d79%3A0x8dfa9b23406a96fc!2sAstoria%20Cocktail%20Room!5e0!3m2!1sen!2s!4v1658221443892!5m2!1sen!2s"
            width="90%"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
};

export default About;

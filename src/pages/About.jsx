import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import owners from '../images/staff/owners.jpg';

const About = () => {
  const theme = createTheme();

  const data = [
    // {
    //   name: 'Jubran-Nineveh Kort',
    //   imagePath:
    //     'https://raw.githubusercontent.com/GeoHaz7/Astoria-Cocktail-Room/main/src/images/staff/owners.jpg',
    //   title: 'Owners',
    // },
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
      <Grid
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        direction="row"
        container
      >
        <Grid m={2} mx={5} item xs={12} maxWidth="400px">
          <ThemeProvider theme={theme}>
            <Typography sx={{ marginBottom: 3 }} component="h3" variant="h3">
              About Astoria
            </Typography>
            <Typography textAlign="justify" variant="body" component="h3">
              1931, the year the cocktail world introduced its newest addition
              'The Astoria Cocktail'. This wet martini recipe was created in the
              Peacock Alley restaurant which was added to the old bar book, and
              ever since has become a staple classic drink in bars worldwide.
            </Typography>
          </ThemeProvider>
        </Grid>

        {/* <Grid m={2} item xs={6}>
          <img
            style={{ maxHeight: '30vh' }}
            src="https://raw.githubusercontent.com/GeoHaz7/Astoria-Cocktail-Room/main/src/images/astoriaCocktial.jpg"
            alt="cocktail"
          />
        </Grid> */}

        <Grid m={2} item xs={12}>
          <Typography sx={{ marginBottom: 3 }} variant="h3">
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
            <CardMedia component="img" image={owners} alt="green iguana" />
            <CardContent sx={{ bgcolor: 'rgb(25,118,210,100)' }}>
              <Typography variant="body2" color="white">
                Jubran-Nineveh Kort
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {data.map((item) => (
          <Grid m={3} item xs={3}>
            <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
              <CardActionArea>
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
          <Typography sx={{ marginBottom: 3 }} variant="h3">
            Location
          </Typography>
        </Grid>
        <Grid m={5} item xs={12}>
          <iframe
            title="location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3394.504183308078!2d35.208813615110174!3d31.702119781309918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502d9a2800b1d79%3A0x8dfa9b23406a96fc!2sAstoria%20Cocktail%20Room!5e0!3m2!1sen!2s!4v1658221443892!5m2!1sen!2s"
            width="400"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
};

export default About;

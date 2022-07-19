import {
  Card,
  CardActionArea,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';
import owners from '../images/staff/owners.jpg';
import rawan from '../images/staff/rawan.jpg';
import ala from '../images/staff/ala.jpg';
import celine from '../images/staff/celine.jpg';
import raed from '../images/staff/raed.jpg';
import yazan from '../images/staff/yazan.jpg';

const About = () => {
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
        container
        textAlign="center"
        direction="column"
        // spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12 }}
      >
        <Grid m={2} textAlign="center" item xs={12}>
          <Typography sx={{ marginBottom: 3 }} variant="h3">
            About Astoria
          </Typography>
          <Typography textAlign="justify" variant="body">
            1931, the year the cocktail world introduced its newest addition
            'The Astoria Cocktail'. This wet martini recipe was created in the
            Peacock Alley restaurant which was added to the old bar book, and
            ever since has become a staple classic drink in bars worldwide.
          </Typography>
        </Grid>

        <Grid m={2} item xs={12}>
          <img
            style={{ maxHeight: '30vh' }}
            src="https://raw.githubusercontent.com/GeoHaz7/Astoria-Cocktail-Room/main/src/images/astoriaCocktial.jpg"
            alt="cocktail"
          />
        </Grid>

        <Grid m={2} item xs={12}>
          <Typography sx={{ marginBottom: 3 }} variant="h3">
            Staff
          </Typography>

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
      </Grid>
      <Grid
        alignItems="center"
        justifyContent="center"
        container
        textAlign="center"
        direction="row"
        // spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 12 }}
      >
        {data.map((item) => (
          <Grid m={3} item xs={12}>
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

        {/* <Grid m={3} item xs={3}>
          <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
            <CardActionArea>
              <CardMedia component="img" image={celine} alt="green iguana" />
              <CardContent sx={{ bgcolor: 'rgb(25,118,210,100)' }}>
                <Typography variant="body2" color="white">
                  Celine Kort
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid m={3} item xs={3}>
          <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
            <CardActionArea>
              <CardMedia component="img" image={raed} alt="green iguana" />
              <CardContent sx={{ bgcolor: 'rgb(25,118,210,100)' }}>
                <Typography variant="body2" color="white">
                  Raed Kattan
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid m={3} item xs={3}>
          <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
            <CardActionArea>
              <CardMedia component="img" image={yazan} alt="green iguana" />
              <CardContent sx={{ bgcolor: 'rgb(25,118,210,100)' }}>
                <Typography variant="body2" color="white">
                  Yazan Khater
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid m={3} item xs={3}>
          <Card sx={{ maxWidth: 345, boxShadow: 5 }}>
            <CardActionArea>
              <CardMedia component="img" image={ala} alt="green iguana" />
              <CardContent sx={{ bgcolor: 'rgb(25,118,210,100)' }}>
                <Typography variant="body2" color="white">
                  Ala Bannoura
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid> */}
      </Grid>
    </>
  );
};

export default About;

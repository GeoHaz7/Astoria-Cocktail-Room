import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from '@mui/material';
import { Form } from 'react-bootstrap';

import { Box } from '@mui/system';
import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

// import CallIcon from '@mui/icons-material/Call';

const Home = () => {
  const [data, setData] = useState([]);
  // const [base64String, setBase64String] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000')
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  }, []);

  // const submithandler = (e) => {
  //   e.preventDefault();
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   };

  //   axios.post(`http://localhost:5000/api/uploads`, image, config);
  // };

  // const [image, setImage] = useState('');
  // const [uploading, setUploading] = useState(false);

  // const uploadFileHandler = async (e) => {
  //   const file = e.target.files[0];

  //   const formData = new FormData();

  //   formData.append('image', file);
  //   setUploading(true);

  //   try {
  //     const config = {
  //       headers: {
  //         'Content-Type': 'multipart/for-data',
  //       },
  //     };

  //     const { data } = await axios.post('/api/upload', formData, config);
  //     setImage(data);
  //     setUploading(false);
  //   } catch (error) {
  //     console.error(error);
  //     setUploading(false);
  //   }
  // };
  return (
    <Box mx={2}>
      <Card className="homeCard" sx={{ boxShadow: 0 }}>
        <CardMedia
          component="img"
          width={100}
          image="https://raw.githubusercontent.com/GeoHaz7/Astoria-Cocktail-Room/main/src/images/background.jpg"
          alt="homeImage"
        />

        <CardContent>
          <Typography fontFamily="serif" variant="h5" color="text.secondary">
            Enter the dazzling era of the 1920’s inside Astoria Cocktail Room.
            We’ve saved you a seat 🪑
          </Typography>
        </CardContent>

        <CardActions style={{ justifyContent: 'center' }}>
          <Button variant="contained" size="large">
            <Link
              href="tel:0566 009 199"
              style={{ textDecoration: 'none', color: '#fff' }}
            >
              Call To Reserve {/* <CallIcon /> */}
              <span role="img" aria-label="">
                ☎️
              </span>
            </Link>
          </Button>
        </CardActions>
      </Card>

      {data.map((singleData) => {
        const base64String = Buffer.from(singleData.img.data.data).toString(
          'base64'
        );

        return (
          <img
            src={`data:image/png;base64,${base64String}`}
            alt=""
            width="100%"
          />
        );
      })}

      {/* <Form onSubmit={submithandler}>
        <Form.Group controlId="image">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          ></Form.Control>
          <Form.Control
            type="file"
            label="Choose file"
            custom
            onChange={uploadFileHandler}
          />
          {uploading && <h1>Loading</h1>}
        </Form.Group>

        <Button type="submit" variant="primary">
          Update
        </Button>
      </Form> */}
    </Box>
  );
};

export default Home;

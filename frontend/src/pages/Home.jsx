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
  // const [data, setData] = useState([]);
  // const [image, setImage] = useState({ preview: '', data: '' });
  // const [status, setStatus] = useState('');

  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000')
  //     .then((res) => setData(res.data))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let formData = new FormData();
  //   formData.append('testImage', image.data);
  //   axios
  //     .post('http://localhost:5000', formData)
  //     .then((res) => setStatus(res.statusText))
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // const handleFileChange = (e) => {
  //   const img = {
  //     preview: URL.createObjectURL(e.target.files[0]),
  //     data: e.target.files[0],
  //   };
  //   setImage(img);
  // };

  return (
    <Box mx={2}>
      <Card className="homeCard" sx={{ boxShadow: 0 }}>
        <CardMedia
          component="img"
          width={100}
          image="https://raw.githubusercontent.com/GeoHaz7/Astoria-Cocktail-Room/main/frontend/src/images/background.jpg"
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

      {/* <div className="App">
        <h1>Upload to server</h1>
        {image.preview && (
          <img src={image.preview} width="100" height="100" alt="" />
        )}
        <hr></hr>
        <form onSubmit={handleSubmit}>
          <input type="file" name="file" onChange={handleFileChange}></input>
          <button type="submit">Submit</button>
        </form>
        {status && <h4>{status}</h4>}
      </div>

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
      })} */}
    </Box>
  );
};

export default Home;

import express from 'express';
import dotenv from 'dotenv';
const app = express();
const port = process.env.PORT || 5000;
import connectDB from './config/db.js';
import multer from 'multer';
// import upload from './routes/upload.js';
import fs from 'fs';
import path from 'path';
import userRoutes from './routes/userRoutes.js';
import Image from './models/images.js';

dotenv.config();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const __dirname = path.resolve();
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

app.post('/', upload.single('testImage'), (req, res) => {
  const saveImage = new Image({
    name: req.body.name,
    img: {
      data: fs.readFileSync('uploads/' + req.file.filename),
      contentType: 'image/png',
    },
  });

  saveImage
    .save()
    .then((res) => console.log('image is saved'))
    .catch((err) => console.log('err'));
  res.send('image Saved');
});

app.get('/', async (req, res) => {
  const allData = await Image.find();
  res.json(allData);
});

app.use('/', userRoutes);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});
app.get('/', (req, res, next) => {
  res.send('Welcome to Express');
});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

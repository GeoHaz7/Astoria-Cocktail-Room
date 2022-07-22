import express from 'express';
import User from '../models/users.js';

const app = express();

app.post('/add_user', async (request, response) => {
  const user = new User(request.body);

  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get('/users', async (request, response) => {
  const users = await User.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

export default app;

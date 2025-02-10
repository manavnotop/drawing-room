import express from 'express';
import jwt from 'jsonwebtoken';
import { middleware } from './middleware';
import { JWT_SECRET } from '@repo/backend-common/config';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/signin", (req, res) => {
  res.json({
    userId: 1,
  });
});

app.post("/signup", (req, res) => {
  const userId = 1;
  const token = jwt.sign({ 
    userId 
  }, JWT_SECRET);

  res.json({ 
    token 
  });
}); 


app.post("/room", middleware, (req, res) => {
  //db call
  res.json({
    roomId: "123",
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3000');
});
import express from 'express';
import { JWT_SECRET } from './config';
import jwt from 'jsonwebtoken';
import { middleware } from './middleware';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/signin", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", (req, res) => {
  res.send("Hello World!");

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
  res.send("Hello World!");
});

app.listen(3001, () => {
  console.log('Server is running on port 3000');
});
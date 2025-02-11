import express from 'express';
import jwt from 'jsonwebtoken';
import { middleware } from './middleware';
import { JWT_SECRET } from '@repo/backend-common/config';
import { CreateUserSchema, SignInSchema, CreateRoomSchema} from '@repo/common/types';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/signup", (req, res) => {

  const data = CreateUserSchema.safeParse(req.body);
  if(!data.success) {
    res.status(400).json({
      error: "Invalid data",
    });
    return;
  }
  
  res.json({
    userId: 1,
  });
});

app.post("/signin", (req, res) => {
  const data = SignInSchema.safeParse(req.body);
  if(!data.success) {
    res.status(400).json({
      error: "Invalid data",
    });
    return;
  }
  const userId = 1;
  const token = jwt.sign({ 
    userId 
  }, JWT_SECRET);

  res.json({ 
    token 
  });
}); 


app.post("/room", middleware, (req, res) => {
  
  const data = CreateRoomSchema.safeParse(req.body);
  if(!data.success) {
    res.status(400).json({
      error: "Invalid data",
    });
    return;
  }
  //db call
  res.json({
    roomId: "123",
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3000');
});
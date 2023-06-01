import express from 'express';
import { Server } from './server/scripts/server';

const app = express();
const server = new Server();

app.get('/', (req, res) => {
  res.send('Welcome to UntouchablesTestNet!');
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

import express from 'express';

const app = express();

const hostname = 'localhost';
const port = 3000;

app.use(express.json());

app.listen(() => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
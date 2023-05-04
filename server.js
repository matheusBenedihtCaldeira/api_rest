import app from './app';

const port = 8080;

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
  console.log(`Link: http://localhost:${port}`);
});

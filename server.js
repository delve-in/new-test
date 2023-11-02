const express = require('express');

const app = express();

const PORT = 3001;

app.get("/", (req, res)=> console.log("This the forst one"));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
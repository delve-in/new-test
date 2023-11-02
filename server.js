const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001

app.get("/", (req, res)=> req.json("This the forst one"));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001

app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
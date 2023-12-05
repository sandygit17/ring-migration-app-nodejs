const express = require('express');
const app = express();
const { migrateRings } = require('./ringMigrator');

app.get('/migrateRings/:N', (req, res) => {
  const N = parseInt(req.params.N);
  const steps = migrateRings(N, 'A', 'B', 'C');
  res.json(steps);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

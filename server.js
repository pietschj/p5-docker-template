const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const SKETCHES_DIR = path.join(__dirname, 'sketches');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/sketches', express.static(SKETCHES_DIR));

app.get('/api/sketches', (req, res) => {
  if (!fs.existsSync(SKETCHES_DIR)) {
    return res.json([]);
  }
  try {
    const sketches = fs.readdirSync(SKETCHES_DIR, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => ({ name: d.name, url: `/sketches/${d.name}/` }));
    res.json(sketches);
  } catch (err) {
    res.json([]);
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`p5 gallery running at http://localhost:${PORT}`);
});

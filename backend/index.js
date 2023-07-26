const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 5001;

app.use(cors());
app.use(bodyParser.json());

// Sample route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Serve the React app as static files from 'frontend/dist'
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Default route to handle requests to any other undefined routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});

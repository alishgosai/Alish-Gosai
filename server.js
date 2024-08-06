const express = require('express');
const path = require('path');
const app = express();
const port = 3000; // Your port number

// Serve static files from the root directory
app.use(express.static(__dirname));

// Route for the home page
app.get(['/', '/home'], (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle other routes
app.get('*', (req, res) => {
  const filePath = path.join(__dirname, req.path + '.html');

  // Log for debugging
  console.log(`Requested path: ${req.path}`);
  console.log(`File path resolved: ${filePath}`);

  // Check if the file exists
  res.sendFile(filePath, (err) => {
    if (err) {
      // Serve index.html for any unmatched routes
      res.sendFile(path.join(__dirname, 'index.html'));
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

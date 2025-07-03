const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all routes
app.use(cors());

// Serve static files from the public directory
app.use(express.static('public'));

// API endpoint
app.get('/api/:date?', (req, res) => {
  let date;
  const dateParam = req.params.date;

  // Handle empty date parameter (tests 7 & 8)
  if (!dateParam) {
    date = new Date();
    return res.json({
      unix: date.getTime(),
      utc: date.toUTCString()
    });
  }

  // Check if it's a Unix timestamp (numeric string) (test 4)
  if (/^\d+$/.test(dateParam)) {
    date = new Date(parseInt(dateParam));
  } else {
    date = new Date(dateParam);
  }

  // Handle invalid dates (test 6)
  if (isNaN(date.getTime())) {
    return res.json({ error: "Invalid Date" });
  }

  // Return response for valid dates (tests 2, 3, 5)
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// Serve the frontend
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
const express = require('express');
const app = express();
const port = 49152; // Choose any port number you prefer

// Define a route to handle the root URL
app.get('/', (req, res) => {
  res.send('Hi Puja!'); // You can customize the response here
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
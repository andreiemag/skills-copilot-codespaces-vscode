
// Create web server
var express = require('express');
var app = express();

// Create comments array
var comments = [
  { name: 'John', message: 'Hello world!' },
  { name: 'Mary', message: 'Goodbye world!' }
];

// Create route for getting comments
app.get('/comments', function(req, res) {
  res.json(comments);
});

// Start web server
app.listen(3000, function() {
  console.log('Web server started on port 3000');
});

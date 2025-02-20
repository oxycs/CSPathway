// We will be using a backend library called Express JS
const express = require('express')
// This creates an app object for use in the code
const app = express()
// This automatically takes the body of requests and interprets them as JSON
app.use(express.json());
// This sets the port that the server will be running on
const port = 3000


// This is a simple GET request that sends a string back to the client
app.get('/exampleget', (req, res) => {
  res.send('Hello World!')
})

// These OPTIONS headers allow for cross-origin requests, i.e. requests from a different domain (like from a frontend)
app.options('/examplepost', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.end();
});

// This is a simple POST request that logs the body of the request and sends a string back to the client
// POST requests are used to send data to the server, like when submitting a user's replies to a form
app.post('/examplepost', (req, res) => {
    // log body of the request to the console, for debugging purposes
    console.log("RECIEVED FROM FRONTEND: ");
    console.log(req.body);
    // add Access-Control-Allow-Origin header to allow cross-origin requests
    res.header("Access-Control-Allow-Origin", "*");
    // send JSON back to the frontend
    res.send({"textJsonKey": "TEXT SENT AS A REPLY TO FRONTEND"});
})

// This starts the app once all the endpoints have been defined
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

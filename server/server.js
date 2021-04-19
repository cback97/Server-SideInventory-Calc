// Build server, and establish port for app to listen on
const express = require('express')
const app = express();
const PORT = 5000; 

// Test and see which port the express server is listening on
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})

// Server to derive data from server/public folders
app.use(express.static('server/public'));

// set up how to read things from the request body
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

// Build array to hold operation history
const historyArray = [];

app.get('/calculation', (req,res) => {

})

app.post('/calculation', (req,res) => {

})

function operations() {

}





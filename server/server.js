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
app.use(bodyParser.urlencoded({  extended: true}));

// Build array to hold operation history
const historyArray = [];


app.post('/calculation', (req, res) => {
    let newOperation = req.body;
    // create total property for newOperation
    newOperation.solve = operations(newOperation)
    // push newOperation object into historyArray
    historyArray.push(newOperation)
})

function operations(newOperation) {
    let solve;
    let num1 = newOperation.input1;
    let num2 = newOperation.input2;
    switch (newOperation.operator) {
        case '+':
            solve = num1 + num2;
            
            break;
        case '-':
            solve = num1 - num2;
            
            break;
        case '*':
            solve = num1 * num2;
            
            break;
        case '/':
            solve = num1 / num2;
            
            break;
    }
    return solve;
} // end swith statement function

app.get('/calculation', (req, res) => {
    res.send(historyArray)
})
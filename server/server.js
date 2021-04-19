// Build server, and establish port for app to listen on
const express = require('express')
const app = express();
const PORT = 5000; 

// Test and see which port the express server is listening on
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})


app.use(express.static('server/public'));




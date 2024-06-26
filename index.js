const express = require('express');
const app = express();

console.log('Before setting up the route');

app.get('/', (req, res) =>res.send('Hola'));


app.listen(3000);

console.log('Server on port', 3000);
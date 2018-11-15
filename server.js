const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.post('/', bodyParser.urlencoded({ extended: false }), bodyParser.json(), (req, res) => {
  const { inputValue } = req.body
  res.send(inputValue.split('').reverse().join(''));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
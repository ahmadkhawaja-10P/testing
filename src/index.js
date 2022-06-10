const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
app.use(bodyParser.json());

var server = app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });


app.get('/', (req, res) => {
  res.send('Hello World!')
});

module.exports = app;

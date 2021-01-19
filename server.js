const express = require('express');
const paths = require('./config/paths');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static(paths.build));

app.get('*', (req, res) => {
  res.sendFile(`${paths.public}/index.html`);
});

app.listen(port);

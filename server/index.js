const express = require('express');
const path = require('path');
// const db = require('./models/index');

const app = express();
const port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080;
const ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

// app.use('/', express.static(path.join(__dirname, 'view')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/view/index.html'));
});

app.listen(port, ip, () => {
  /* eslint-disable no-console */
  console.log(`listening on port ${port}`);
});

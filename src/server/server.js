const bodyParser = require('body-parser');
const express = require('express');

const mongoose = require('mongoose');
const config = require('./config');

const app = express();

// View
app.use('/', express.static(`${__dirname}/../static`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router
app.use('/user', require('./routes/userRoute')); // this command must behind two commands which use to setting bodyPaser

// Connect mongoDB
mongoose.connect(config.getDbConnectionString());

const port = config.getPort();
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

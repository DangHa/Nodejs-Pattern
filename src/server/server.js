const bodyParser = require('body-parser');
const express = require('express');

const app = express();

const mongoose = require('mongoose');
const config = require('./config');

app.use('/', express.static(`${__dirname}/../static`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Router
app.use('/user', require('./routes/userRoute')); // this command must behind two commands which use to setting bodyPaser

// Connect mongoDB
mongoose.connect(config.getDbConnectionString());

app.listen(8080, () => {
  console.log('Listening on port 8080!');
});

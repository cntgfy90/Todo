require('dotenv').load();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://<dbuser>:<dbpassword>@ds121726.mlab.com:21726/todolist`);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const app = express();
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server is up and running on ${port} port`);
});

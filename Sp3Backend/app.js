const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./router/router');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config(); 

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const taskRoutes = require('./router/router');
app.use('/api', taskRoutes);
const { connectToDatabase, getClient } = require('./db');

async function startServer() {
  await connectToDatabase();
  const dbClient = getClient();
}

startServer();

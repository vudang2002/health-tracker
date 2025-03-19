const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { userRouter } = require('./src/routes');
const { mongoURI } = require('./src/config/database');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(mongoURI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.use('/api', userRouter);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
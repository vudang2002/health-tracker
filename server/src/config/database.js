require('dotenv').config();

const mongodb = 'mongodb+srv://vudang30112002:Vudang-30112002@health-tracker.pftu5.mongodb.net/?retryWrites=true&w=majority&appName=health-tracker';
module.exports = {
  mongoURI: process.env.MONGO_URI || 'mongodb+srv://vudang30112002:Vudang-30112002@health-tracker.pftu5.mongodb.net/?retryWrites=true&w=majority&appName=health-tracker',
};
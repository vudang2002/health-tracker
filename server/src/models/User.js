const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  healthData: {
    weight: Number,
    height: Number,
    dailyCalories: Number
  },
  dailyLogs: [{
    date: Date,
    protein: Number,
    fat: Number,
    carbs: Number,
    exercises: [{
      type: String,
      name: String,
      duration: Number,
      muscleGroup: String
    }]
  }]
});

module.exports = mongoose.model('User', userSchema);
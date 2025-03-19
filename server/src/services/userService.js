const { User } = require('../models');

class UserService {
  async getUser(userId) {
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');
    return user;
  }

  async addDailyLog(userId, logData) {
    const user = await User.findById(userId);
    if (!user) throw new Error('User not found');

    user.dailyLogs.push({
      date: new Date(),
      ...logData
    });
    await user.save();
    return user;
  }
}

module.exports = new UserService();
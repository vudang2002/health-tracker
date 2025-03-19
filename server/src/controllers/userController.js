const { userService } = require('../services');

class UserController {
  async getUser(req, res) {
    try {
      const user = await userService.getUser(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  async addDailyLog(req, res) {
    try {
      const { protein, fat, carbs, exercises } = req.body;
      const user = await userService.addDailyLog(req.params.id, {
        protein,
        fat,
        carbs,
        exercises
      });
      res.json(user);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}

module.exports = new UserController();
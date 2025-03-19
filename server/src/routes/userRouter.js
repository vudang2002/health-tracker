const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');

router.get('/user/:id', userController.getUser);
router.post('/user/:id/log', userController.addDailyLog);

module.exports = router;
const express = require('express');

const router = express.Router();

const loginController = require('../controllers/user/login');

router.get('/setDatabase', () => {
  loginController.setDatabase();
});

router.get('/api/:username', (req, res) => {
  loginController.findUser(req, res);
});

router.post('/api/login', (req, res) => {
  loginController.login(req, res);
});

module.exports = router;

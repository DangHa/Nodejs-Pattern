const express = require('express');
const router = express.Router();

const loginController = require('../controllers/user/login');

router.get('/api/login/:username', (req, res) => {
    loginController.findUser(req, res);
});

router.post('/api/login', function(req, res) {
    loginController.login(req, res);
});

module.exports = router;
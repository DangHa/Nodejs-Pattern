const userSchema = require('../../models/user');
const userServices = require('../../middleware/user/user');

module.exports = {

  async findUser(req, res) {
    const username = req.params.username;

    try {
      // you must wait in here because test of model is waitting OI database
      const user = await userServices.test(username);

      res.send(user);
    } catch (err) {
      console.log(`Test: ${err}`);
    }
  },

  async login(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    try {
      const result = await userServices.login(username, password);

      res.send(result);
    } catch (err) {
      console.log(`Login: ${err}`);
    }
  },
};

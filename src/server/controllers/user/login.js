const userServices = require('../../models/userSevices/userQuery');

module.exports = {

  async setDatabase() {
    await userServices.setupUser();
  },

  async findUser(req, res) {
    const Username = req.params.username;

    // you must wait in here because test of model is waitting OI database
    const result = await userServices.findUser(Username);

    res.send(result);
  },

  async login(req, res) {
    const Username = req.body.username;
    const Password = req.body.password;

    const result = await userServices.login(Username, Password);

    res.send(result);
  },

};

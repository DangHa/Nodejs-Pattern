const userSchema = require('../../models/user');

module.exports = {
  async login(username, password) {
    let result = true;

    await userSchema.find({
      username,
      password,
    }, (err, user) => {
      if (err) {
        result = false;
        throw err;
      }

      if (user.length === 0) {
        result = false;
      }
    });

    return result;
  },

  async test(username) {
    let result = 'ahihi sai roi';

    try {
      await userSchema.find({
        username,
      }, (err, password) => {
        if (err) throw err;

        console.log(password);
        result = password;
      });
    } catch (err) {
      console.log(`Model test: ${err}`);
    }

    return result;
  },
};

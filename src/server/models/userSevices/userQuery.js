const userSchema = require('../tables/user');

module.exports = {
  async login(username, password) {
    let result = true;

    await userSchema.find({
      username,
      password,
    }, (err, user) => {
      if (err) {
        result = false;
        throw console.log(`Model test: ${err}`);
      }

      if (user.length === 0) {
        result = false;
      }
    });

    return result;
  },

  async findUser(username) {
    let result = 'ahihi sai roi';

    await userSchema.find({
      username,
    }, (err, user) => {
      if (err) throw console.log(`finding user error: ${err}`);

      console.log(user);
      result = user;
    });

    return result;
  },

  // seed database
  setupUser() {
    const users = [
      {
        username: 'ha',
        password: '123',
      },
      {
        username: 'test',
        password: '221',
      },
    ];

    userSchema.create(users, (err, result) => {
      console.log(`Error: ${err}`);
      console.log(`Result: ${result}`);
    });
  },
};

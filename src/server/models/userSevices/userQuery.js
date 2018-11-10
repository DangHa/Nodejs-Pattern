const userSchema = require('../tables/user');

module.exports = {
  async login(username, password) {
    let result = true;

    try {
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
    } catch (err) {
      console.log(`Model test: ${err}`);
    }


    return result;
  },

  async findUser(username) {
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

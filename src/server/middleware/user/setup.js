const User = require('../models/user');

module.exports = {

  setupUser() {
    // seed database
    const users = [
      {
        username: 'hong',
        password: '123',
      },
      {
        username: 'test',
        password: '221',
      },
    ];

    User.create(users, (err, result) => {
      console.log(`Error: ${err}`);
      console.log(`Result: ${result}`);
    });
  },
};

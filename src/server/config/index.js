const configValues = require('./config');

module.exports = {

  getDbConnectionString() {
    return `mongodb://localhost:27017/${configValues.schemalName}`;
  },

};

const Sequelize = require("sequelize");
const path = require('path');

let sequelize = null;
module.exports = {
  connections: (() => {
    if (!sequelize) {
      sequelize = new Sequelize(
        'sqlite::memory:',
        {
          dialect: "sqlite3",
          storage: path.join(__dirname, '..', 'phoneCalls.sqlite'),
          dialectOptions: {
            multipleStatements: true
          }
        }
      );
    }
    return sequelize;
  })(),
  Sequelize
};

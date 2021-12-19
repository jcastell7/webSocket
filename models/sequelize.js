const Sequelize = require("sequelize");

let sequelize = null;
module.exports = {
  connections: (() => {
    if (!sequelize) {
      sequelize = new Sequelize(
        'sqlite::memory:',
        {
          dialect: "sqlite3",
          logging: database.debug,
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

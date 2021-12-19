const { connections, Sequelize } = require("./sequelize");

var phoneCalls = connections.define(
  "phoneCalls",
  {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    timestamp: Sequelize.DATE,
    sip: Sequelize.STRING,
    city: Sequelize.STRING,
    state: Sequelize.STRING,
    phone_number: Sequelize.STRING,
    priority: Sequelize.INTEGER
  },
  {
    timestamps: false,
    created_at: false,
    updated_at: false
  }
);

module.exports = { PhoneCalls: phoneCalls };

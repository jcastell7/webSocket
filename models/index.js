const { connections } = require("./sequelize");
module.exports = {
  Model: {
    ...require("./phoneCall"),
  },
  connections
};

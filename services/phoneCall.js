const { connections } = require("../models");

function getBiggerPriority(){
    connections.query("SELECT *, MAX(priority) FROM phoneCalls").then(result => {
        connections.query(`DELETE FROM phoneCalls WHERE id = ${result[0].id}`).then(del =>{
            return result;
        });
    });
}

module.exports = {
    getBiggerPriority
  }
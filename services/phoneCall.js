const { connections } = require("../models");

function getBiggerPriority(){
    return new Promise((done, reject)=>{
        connections.query("SELECT *, MAX(priority) FROM phoneCalls").then(result => {
            connections.query(`DELETE FROM phoneCalls WHERE id = ${result[0][0].id}`).then(() =>{
                done(result[0][0]);
            }).catch(err => {
                reject(err);
            });
        }).catch(err => {
            reject(err);
        });
    });
}

module.exports = {
    getBiggerPriority
  }
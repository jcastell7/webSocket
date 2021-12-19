var W3CWebSocket = require('websocket').w3cwebsocket;
const { Model } = require("../models");

function webSocketConnect(direction){
    var client = new W3CWebSocket(direction);

    client.onerror = function() {
        console.log('Connection Error');
    };
    
    client.onopen = function() {
        console.log('WebSocket Client Connected');
    };
    
    client.onclose = function() {
        console.log('echo-protocol Client Closed');
    };
    
    return client; 
}

function receiveAndStoreMsg (client){
    client.onmessage = function(e) {
        if (typeof e.data === 'string') {
            let data = JSON.parse(e.data);
            if(typeof data == 'object'){
                if(!data.message){
                    Model.PhoneCalls.create(data);
                }
            }
        }
    };
}


module.exports = {
    webSocketConnect,
    receiveAndStoreMsg
  }
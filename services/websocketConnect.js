var W3CWebSocket = require('websocket').w3cwebsocket;

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

function receiveAndStoreMsg (client, array){
    client.onmessage = function(e) {
        if (typeof e.data === 'string') {
            console.log("Received: '" + e.data + "'");
        }
    };
}


module.exports = {
    webSocketConnect,
    receiveAndStoreMsg
  }
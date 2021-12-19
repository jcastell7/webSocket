const app = require("./routes");
const { Services } = require("./services");
const wbClient = Services.WebSocket.webSocketConnect('ws://localhost:7777/');
let messages = [];
Services.WebSocket.receiveAndStoreMsg(wbClient, messages);

app.get("/", function(req, res) {
  console.log(req);
  res.status(200).send("api is working");
});

app.listen(3000);

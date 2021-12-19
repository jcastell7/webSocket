const app = require("./routes");
const { Services } = require("./services");
const { connections } = require("./models");

app.get("/", function(req, res) {
  //console.log(req);
  res.status(200).send("api is working");
});

app.listen(3000);

connections
  .authenticate()
  .then(() => {
    console.log("Connection to sqlite successfully");
  })
  .catch(err => {
    console.error("Unable to connect to the sqlite database:", err);
  });
connections.sync();

const wbClient = Services.WebSocket.webSocketConnect('ws://localhost:7777/');

Services.WebSocket.receiveAndStoreMsg(wbClient);
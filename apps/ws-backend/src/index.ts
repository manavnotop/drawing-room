import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 3002 });

wss.on("connection", (ws) => {
  ws.on("message", (message) => {
    console.log(message);
    ws.send("Hello World!");
  });
});

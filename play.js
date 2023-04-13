
const connect = require("./client");

console.log("Connecting ...");
let conn = connect();

conn.on("connect", () => {
  console.log("Successfully connected to game server");
});

conn.on("connect", () => {
  conn.write("Name: VIP");
});


const connect = require("./client");

console.log("Connecting ...");
let conn = connect();

conn.on("connect", () => {
  setInterval( func = () => { conn.write("Move: up");  }, 500);
});
    
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '192.168.2.11',
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: VIP");
    //setInterval( func = () => { conn.write("Move: up");  }, 500);
  });
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });
  
  return conn;
};
module.exports = connect;

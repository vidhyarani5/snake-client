const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '192.168.2.11',
    port: 50541,
  });

  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: VIP");
  });
  
  return conn;
};
module.exports = connect;

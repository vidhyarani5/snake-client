
const connect = require("./client");

console.log("Connecting ...");
let conn = connect();

conn.on("connect", () => {
  setInterval( func = () => { conn.write("Move: up");  }, 500);
});

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;
  //press Ctrl + C to exit
  if (key === '\u0003') {
    stdout.write("Exit the Game!!!!!!!!!!\n");
    process.exit();
  }
};

setupInput();
handleUserInput();
    
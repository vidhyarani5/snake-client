let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = (key) => {
  const stdout = process.stdout;
   
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  if (key === "h") {
    connection.write("Say: Hi");
  }

  //press Ctrl + C to exit
  if (key === '\u0003') {
    stdout.write("Exit the Game!!!!!!!!!!\n");
    process.exit();
  }
};

module.exports = setupInput;
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

module.exports = setupInput;
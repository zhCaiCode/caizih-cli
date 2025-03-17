const chalk = require('chalk');

const hint = (...info) => {
  console.log(chalk.blue(info));
}

const error = (...info) => {
  console.log(chalk.red(info));
}

const clear = () => {
  console.clear();
}

module.exports = {
  hint,
  error,
  clear
}
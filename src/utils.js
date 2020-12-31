const chalk = require('chalk');

module.exports.getConfigFile = (path) => {
  const config = require(path);

  if (!config || !(config instanceof Object)) throw chalk `{red An invalid config file was given or no config file was found at} {blueBright ${path}}`;

  return config;
}

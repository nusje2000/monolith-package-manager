const {
  Command,
  flags
} = require('@oclif/command')

const {
  getConfigFile
} = require('../utils');

class InstallCommand extends Command {
  static strict = false;
  static args = [{
    name: 'package',
    required: false,
    description: 'package(s) to install (can be multiple)',
    multiple: true
  }]


  async run() {
    const {
      flags
    } = this.parse(InstallCommand);
    const config = getConfigFile(flags.config);
  }
}

InstallCommand.description = `Install packages in locations defined in config
Install package(s) to application in configuration.
`;

InstallCommand.flags = {
  config: flags.string({
    char: 'C',
    description: 'path to config file.',
    default: './mpm.config.js'
  }),
  application: flags.string({
    char: 'a',
    description: 'specific application to install package to. (Can be multiple)',
    multiple: true
  })
};

module.exports = InstallCommand;

const {
  Command,
  flags
} = require('@oclif/command');
const {
  getConfigFile
} = require('../utils');

class RemoveCommand extends Command {
  async run() {
    const {
      flags
    } = this.parse(RemoveCommand);
    const config = getConfigFile(flags.config);
  }
}

RemoveCommand.description = `Remove packages from locations defined in config
Remove NPM package from package.json in selected applications.
`;

RemoveCommand.flags = {
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

module.exports = RemoveCommand;

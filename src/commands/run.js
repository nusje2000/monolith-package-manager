const {
  Command,
  flags
} = require('@oclif/command');

const {
  getConfigFile
} = require('../utils');

class RunCommand extends Command {
  async run() {
    const {
      flags
    } = this.parse(RunCommand);
    const config = getConfigFile(flags.config);

  }
}

RunCommand.description = `Run a NPM script in all defined locations
Runs NPM scripts in all locations defined in --application flags or mpm.config.js file
`;

RunCommand.flags = {
  config: flags.string({
    char: 'C',
    description: 'path to config file.',
    default: './mpm.config.js'
  }),
  application: flags.string({
    char: 'a',
    description: 'specific application to install package to. (Can be multiple)',
    multiple: true
  }),
  mode: flags.string({
    char: 'M',
    description: 'mode to run the script in',
    options: ['parallel', 'concurrent'],
    default: 'parallel'
  })
};

module.exports = RunCommand;

mpm
===

A monolithic repo package manager for NPM

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/mpm.svg)](https://npmjs.org/package/mpm)
[![Downloads/week](https://img.shields.io/npm/dw/mpm.svg)](https://npmjs.org/package/mpm)
[![License](https://img.shields.io/npm/l/mpm.svg)](https://github.com/Lexouden/monolithic-package-manager/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mpm
$ mpm COMMAND
running command...
$ mpm (-v|--version|version)
mpm/0.0.0 win32-x64 node-v14.15.3
$ mpm --help [COMMAND]
USAGE
  $ mpm COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mpm help [COMMAND]`](#mpm-help-command)
* [`mpm install`](#mpm-install)
* [`mpm remove`](#mpm-remove)
* [`mpm run`](#mpm-run)

## `mpm help [COMMAND]`

display help for mpm

```
USAGE
  $ mpm help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

## `mpm install`

Install packages in locations defined in config

```
USAGE
  $ mpm install

OPTIONS
  -A, --application=application  specific application to install package to.
  -C, --config=config            [default: ./mpm.config.js] path to config file.

DESCRIPTION
  Install package(s) to locations in configuration from a `mpm.config.js` file.
```

_See code: [src/commands/install.js](https://github.com/Lexouden/monolithic-package-manager/blob/v0.0.0/src/commands/install.js)_

## `mpm remove`

Remove packages from locations defined in config

```
USAGE
  $ mpm remove

OPTIONS
  -A, --application=application  specific application to install package to.
  -C, --config=config            [default: ./mpm.config.js] path to config file.

DESCRIPTION
  Remove NPM package from package.json in selected applications.
```

_See code: [src/commands/remove.js](https://github.com/Lexouden/monolithic-package-manager/blob/v0.0.0/src/commands/remove.js)_

## `mpm run`

Describe the command here

```
USAGE
  $ mpm run

OPTIONS
  -n, --name=name  name to print

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/run.js](https://github.com/Lexouden/monolithic-package-manager/blob/v0.0.0/src/commands/run.js)_
<!-- commandsstop -->

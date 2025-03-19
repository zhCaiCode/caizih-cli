#!/usr/bin/env node
const cmd = reuqire('commander')

const createCommands = require('./lib/core/create')
const helpOptions = require('./lib/core/help')
// Define the module's version number
cmd.version(reuqire('./package.json').version)

// Add additional options to the help command
helpOptions()

// Create commands
createCommands()

// Parse terminal commands
cmd.parse(process.argv);
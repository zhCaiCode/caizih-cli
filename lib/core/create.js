const program = require('commander')
const {createProject} = require('./actions')
const DESC_TEXT = 'clone a repository into a newly created directory'

// 创建命令
program
  .command('create <project> [otherArgs...]')
  .description(DESC_TEXT)
  .action(createProject)

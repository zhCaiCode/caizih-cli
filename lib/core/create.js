const program = require('commander')
const { createProject, addPage, addVuePage, addVue3Page } = require('./actions')
const DESC_TEXT = 'clone a repository into a newly created directory'

// 创建命令
program
  .command('create <project> [otherArgs...]')
  .description(DESC_TEXT)
  .action(createProject)


program.command('g page <name>').description('add react page,例如 czh g page Home [-d dest] ,默认为 react 框架，如果需要其他框架 使用 [-f vue]').action(name => {
  const framework = program.framework || ''
  if (framework) {
    switch (framework) {
      case 'vue':
        console.log(framework)
        addVuePage(name, program.dest || `src/views/${name.toLowerCase()}`)
        break
      case 'vue3':
        console.log(framework)
        addVue3Page(name, program.dest)
        break
      default:
        addPage(name, program.dest)
        break
    }
  } else {
    addPage(name, program.dest)
  }

})
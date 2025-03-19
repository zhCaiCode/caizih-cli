const program = require('commander')
const { createProject, addPage, addVuePage, addVue3Page } = require('./actions')
const DESC_TEXT = 'clone a repository into a newly created directory'

const createCommands = () => {
  // Create Commands
  program
    .command('create <project> [otherArgs...]')
    .description(DESC_TEXT)
    .action(createProject)


  program.command('g page <name>').description('add react page, e.g., czh g page Home [-d dest], defaults to the React framework. If another framework is needed, use [-f vue]').action(name => {
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
}

module.exports = createCommands

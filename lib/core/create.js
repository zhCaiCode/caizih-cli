const program = require('commander')
const { createProject, addPage, addVuePage, addVue3Page, addVueComponent, addVueStore, addReactComponent } = require('./actions')
const { vueGitRepo, vue3GitRepo, ReactGitRepo } = require('../config/repo_config')
const DESC_TEXT = 'clone a repository into a newly created directory'

const createCommands = () => {
  // Create Commands
  program
    .command('create <project> [otherArgs...]')
    .description(DESC_TEXT)
    .action((project) => {
      const framework = program.framework || ''
      let repoUrl = ''
      switch (framework) {
        case 'vue':
          repoUrl = vueGitRepo
          break
        case 'vue3':
          repoUrl = vue3GitRepo
          break
        default:
          repoUrl = ReactGitRepo

      }
      createProject(project, repoUrl)

    })
  const g = program.command('g')
  g.command('page <name>').description('add page, e.g., czh g page Home [-d dest], defaults to the React framework. If another framework is needed, use [-f vue]').action(name => {
    const framework = program.framework || ''
    if (framework) {
      switch (framework) {
        case 'vue':
          console.log(framework)
          addVuePage(name, program.dest || `src/views/${name.toLowerCase()}`)
          break
        case 'vue3':
          console.log(framework)
          console.log('dev ing...')
          // addVue3Page(name, program.dest)
          break
        default:
          console.log(`create ${framework || 'react'} page`)
          addPage(name, program.dest || `src/pages/${name}`)
          break
      }
    } else {
      console.log(`create ${framework || 'react'} page`)
      addPage(name, program.dest || `src/pages/${name}`)
    }

  })
  g.command('component <name>').description('add  component, e.g., czh g component Home [-d dest], defaults to the React framework. If another framework is needed, use [-f vue]').action(name => {
    const framework = program.framework || ''
    if (framework) {
      switch (framework) {
        case 'vue':
          console.log(framework)
          addVueComponent(name, program.dest || `src/components`)
          break
        case 'vue3':
          console.log('dev ing...')
          break
        default:
          addReactComponent(name,program.dest || `src/components/${name}`)
          break
      }
    } else {
      addReactComponent(name,program.dest || `src/components/${name}`)
    }

  })



  g.command('store <name>').description('add  store, e.g., czh g store Home [-d dest], defaults to the React framework. If another framework is needed, use [-f vue]').action(name => {
    const framework = program.framework || ''
    if (framework) {
      switch (framework) {
        case 'vue':
          console.log(framework)
          addVueStore(name, program.dest || `src/store/modules`)
          break
        case 'vue3':
          console.log('dev ing...')
          break
        default:
          console.log('dev ing...')
          break
      }
    } else {
      console.log('dev ing...')
    }

  })

}

module.exports = createCommands

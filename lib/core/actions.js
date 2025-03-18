const { promisify } = require('util')
const downloadRepo = promisify(require('download-git-repo'))
const log = require('../utils/logs')
const { ReactGitRepo } = require('../config/repo_config')
const { spwan } = require('../utils/terminal')
const { spawn } = require('child_process')
async function createProject(project, otherArgs) {

    log.hint('czh helps you create your project, please wait a moment~')
    await downloadRepo(ReactGitRepo, project, { clone: true })
    const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    // 安装依赖
    await spwan(npm,['install'],{cwd:`./${project}`})

    spawn(npm,['run','dev'],{cwd:`./${project}`})
}


module.exports = {
    createProject
}
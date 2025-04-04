const { promisify } = require('util')
const path = require('path')
const downloadRepo = promisify(require('download-git-repo'))
const log = require('../utils/log')
const { spwan } = require('../utils/terminal')
const { spawn } = require('child_process')
const { esCompile, mkdirSync, writeFile } = require('../utils/file')
async function createProject(project, otherArgs) {
    const [repoUrl] = otherArgs
    log.hint('czh helps you create your project, please wait a moment~')
    await downloadRepo(repoUrl, project, { clone: true })
    const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm'

    await spwan(npm, ['install'], { cwd: `./${project}` })

    spawn(npm, ['run', 'dev'], { cwd: `./${project}` })
}

const handleEjsToFile = async(name, dest, template, filename)=>{
    const lowerName = name.toLowerCase() || name
    const templatePath = path.resolve(__dirname,template)
    const moduleName = dest.split('/').pop()
    const componentPath = `./components`
    const servicesPath = dest.replace('src','@').replace('hooks','services').replace(lowerName,'').toLowerCase()
    const updateFormHooksPath = dest.replace('src','@').replace('pages','hooks').replace('components','').replace(name,lowerName)
    const result = await esCompile(templatePath,{name,lowerName:name.toLowerCase(),componentPath,servicesPath,moduleName,updateFormHooksPath})
    mkdirSync(dest)
    const targetPath = path.resolve(dest,filename)
    writeFile(targetPath,result)
    console.log(`created ${targetPath}`)
    
}

const handleVueEjsToFile = async(name, dest, template, filename)=>{
    const templatePath = path.resolve(__dirname,template)
    const componentPath = dest.replace('router','views').replace('src','@')
    const routePath = dest.replace('/router','').replace('src','')
    const apiPath = dest.replace('src','@').replace('views','api')
    const result = await esCompile(templatePath,{name,lowerName:name.toLowerCase(),componentPath,routePath,apiPath})
    mkdirSync(dest)
    const targetPath = path.resolve(dest,filename)
    writeFile(targetPath,result)
    console.log(`created ${targetPath}`)
}


async function addVueComponent(name,dest){
    handleVueEjsToFile(name,dest,'../template/vue/component.vue.ejs',`${name}.vue`)
}
async function addReactComponent(name,dest){
    handleEjsToFile(name,dest,'../template/react/page.tsx.ejs',`index.tsx`)
}

async function addPage(name, dest) {
    console.log('add react page', name, dest)
    const lowerName = name.toLowerCase() || name
    const pagePath = `${dest}/${name}`
    addReactComponent(name,pagePath)
    const updateFormPath = `${pagePath}/components`
    handleEjsToFile(name,updateFormPath,'../template/react/UpdateForm.tsx.ejs',`UpdateForm.tsx`)
    let servicesDest = dest.replace('pages','services').replace(lowerName,'')
    handleEjsToFile(name,servicesDest,'../template/react/api/request.ts.ejs',`${lowerName}.ts`)
    const hooksDest = dest.replace('pages','hooks')+`/${lowerName}`
    const hooksNames = ['useColumns.tsx','useData.ts','useModal.ts','useState.ts','useUpdateForm.tsx']
    for(const hookName of hooksNames){
        handleEjsToFile(name,hooksDest,`../template/react/hooks/${hookName}.ejs`,`${hookName}`)
    }

}
async function addVuePage(name, dest,needRoute = false) {
    console.log('add vue page...')
    const lowerName = name.toLowerCase() || name
    addVueComponent(name,dest)
    if(needRoute){
        let routerDest = dest.replace("views", "router")
        handleVueEjsToFile(name,routerDest,'routePath.ejs','router.js')
    }
    let apiDest = dest.replace('views','api').replace(lowerName,'')
    handleVueEjsToFile(name,apiDest,'../template/vue/api.js.ejs',`${lowerName}.js`)
}

async function addVue3Page(name, dest) {
    console.log('add vue3 page', name, dest)
}

const addVueStore = (name,dest)=>{
    const lowerName = name.toLowerCase()
    let storeDest = dest.replace('views','store/modules')
    handleVueEjsToFile(name,storeDest,'../template/vue/store.js.ejs',`${lowerName}.js`)
}

module.exports = {
    createProject,
    addPage,
    addVuePage,
    addVue3Page,
    addVueComponent,
    addVueStore,
    addReactComponent
}
const program = require('commander')
// 给 help 增加其他选项
const helpOptions = ()=>{
    program.option('-s --src <src>', 'a source folder');
    program.option('-d --dest <dest>', 'a destination folder');
    program.option('-f --framework <framework>', 'your framework name');

    program.on('--help',function(){
        console.log("");
        console.log("usage");
        console.log("   czh -v");
        console.log("   czh -version");
        console.log("   czh g page to create page,[-f --framework] your framework name")
        console.log("   czh g component to create component,[-f --framework] your framework name")
        console.log("   czh g store to create vue store file,[-f --framework] your framework name")
    })
}
module.exports = helpOptions;
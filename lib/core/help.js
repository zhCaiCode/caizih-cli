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
    })
}
module.exports = helpOptions;
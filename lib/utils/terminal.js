const {spawn, exec} = require('child_process')

function terminalSpawn(...args){
    return new Promise((resolve,reject)=>{
        const childProcess = spawn(...args)
        childProcess.stdout.pipe(process.stdout)
        childProcess.stderr.pipe(process.stderr)
        childProcess.on('close',function(){
            resolve()
        })
    })
}
function terminalExec(...args){
    return new Promise((resolve,reject)=>{
        exec(...args,(err,stdout,stderr)=>{
            if(err){
                reject(err)
                return 
            }
            console.log(stdout.replace('\n', ''));
            resolve()
        })
    })
}
module.exports = {
    spawn:terminalSpawn,
    exec:terminalExec
}
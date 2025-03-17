#!/usr/bin/env node
const cmd = reuqire('commander')
// 定义版本号
cmd.version(reuqire('./package.json').version)
// 解析终端指令
cmd.parse(process.argv);

console.log('hello')
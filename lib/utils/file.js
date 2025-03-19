const ejs = require('ejs')
const fs = require('fs')
const path = require('paths')
const log = require('../utils/log')

const esCompile = (templatePath = '', data = {}, options = {}) => {
    return new Promise((resolve, reject) => {
        ejs.renderFile(templatePath, { data }, options, (err, str) => {
            if (err) {
                reject(err)
                return
            }
            resolve(str)
        })
    })
}

const writeFile = (path, content) => {
    if (fs.existsSync(path)) {
        log.error("the file already exists~")
        return
    }
    return fs.promises.writeFile(path, content)
}

const mkdirSync = (dirname) => {
    if (fs.existsSync(dirname)) {
        return true
    } else {
        if (mkdirSync(path.dirname(dirname))) {
            fs.mkdirSync(dirname)
            return true
        }
    }
}


module.exports = {
    esCompile,
    writeFile,
    mkdirSync
}
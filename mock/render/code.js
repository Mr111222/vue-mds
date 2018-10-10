'use strict'
const fs = require('fs')

const templateFile = 'src/components/template.vue'
function saveCode (code) {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFile(templateFile, code, err => {
        if (err) {
          reject(err)
        } else {
          resolve('OK')
        }
      })
    } catch (e) {
      console.error(e.stack)
      reject(e)
    }
  })
}
function getCode (filepath, fileName) {
  return new Promise((resolve, reject) => {
  	console.log(filepath, fileName)
    try {
      const bytesRead = fs.readFileSync(filepath + fileName, {encoding: 'utf-8'})
      fs.writeFileSync(templateFile, prefixPath(bytesRead, filepath), {encoding: 'utf-8'})
      resolve(bytesRead)
    } catch (err) {
      reject(err)
    }
  })
}
function prefixPath (code, filepath) {
  return code
}
exports.getData = function (method, data) {
  console.log(data)
  if (method === 'GET') {
    return getCode('src/components/', data.file)
  } else {
    return saveCode(data.code)
  }
}

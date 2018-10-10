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
    try {
      const bytesRead = fs.readFileSync(filepath + fileName, {encoding:'utf-8'})
      fs.writeFileSync(templateFile, prefixPath(bytesRead, filepath), {encoding: 'utf-8'})
      resolve(bytesRead)
    } catch (err) {
      reject(err)
    }
  })
}
function prefixPath (code, filepath) {
  console.log(filepath)
  return code
}
function middware (req, res, next) {
  if (req.method === 'GET') {
    apiRes = getCode(req.path, req.query.fileName)
  } else if (req.method !== 'OPTIONS') {
    apiRes = saveCode(req.body.code)
  }
  if (apiRes) {
    apiRes.then(result => {
      res.send(result)
    }).catch(e => {
      res.status(500).send(e.message)
    })
  }
}
export default {getCode, saveCode}

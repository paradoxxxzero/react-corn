import parser from '@babel/parser'
import fs from 'fs'
import { fileURLToPath } from 'node:url'
import path from 'path'
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const listDir = (dir, fileList = []) => {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      fileList = listDir(path.join(dir, file), fileList)
    } else {
      if (/\.js$/.test(file)) {
        const name = `${file}x`
        const src = path.join(dir, file)
        const newSrc = path.join(dir, name)

        const data = fs.readFileSync(src, 'utf8')

        try {
          parser.parse(data, { sourceType: 'module', plugins: ['flow'] })
        } catch (err) {
          fileList.push({
            oldSrc: src,
            newSrc: newSrc,
          })
        }
      }
    }
  })

  return fileList
}

const foundFiles = listDir(__dirname + '/stories')

foundFiles.forEach(f => {
  fs.renameSync(f.oldSrc, f.newSrc)
})

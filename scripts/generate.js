'use strict';

const fs = require('fs');

const [projectName] = process.argv.slice(2);
const dirName = './src/' + projectName;

const noop = () => {}
const createFile = (name, ext, cb=noop) => {
  fs.readFile('./src/sandbox/sandbox.' + ext, 'utf8', (err, template) => {
    if (err) console.error(err);
    const path = `${dirName}/${name}.${ext}`

    const file = template.replace(`import './sandbox.css'`, `import './${name}.css'`)

    fs.writeFile(path, file, (err) => {
      if (err) {
        cb(err)
        console.log(`Error creating ${name}.${ext}: ${err}`)
      } else {
        console.log(`Generated: ${path}`)
        cb()
      }

    });
  })
}

fs.mkdir(dirName, (err) => {
  if (err) return console.error(err)
  createFile(projectName, 'css')
  createFile(projectName, 'html')
  createFile(projectName, 'js')
})

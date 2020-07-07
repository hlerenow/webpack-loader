const marked = require('marked')

module.exports = source => {
  console.log(source)
  const html = marked(source)
  console.log("html")
  console.log(html)

  const code = `
     export default ${JSON.stringify(html)}
  `

  return code
}
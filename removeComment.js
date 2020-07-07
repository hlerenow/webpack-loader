class RemoveCommentPlugin {
  apply(compiler) {
    console.log('RemoveCommentPlugin')
    compiler.hooks.emit.tap('RemoveCommentPlugin', function (compilation) {
      for (const name in compilation.assets) {
        console.log(name)
        if (name.endsWith('.js')) {
          const content = compilation.assets[name].source()
          const noComment = content.replace(/\/\*{2,}\/\s?/g, '')
          compilation.assets[name] = {
            source: () => noComment,
            size: () => noComment.length
          }
        }
      }
    })
  }
}

module.exports = RemoveCommentPlugin
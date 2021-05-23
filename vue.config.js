module.exports = {
    chainWebpack: config => {
      config
        .plugin('html')
        .tap(args => {
          args[0].title= '前端CSS特效'
          return args
        })
    }
  }
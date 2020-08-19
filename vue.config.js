module.exports = {
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // Provide path to the file with resources
          // 要公用的scss的路径
          resources: './src/assets/css/common.scss'
        })
      .end()
    })
  },
  devServer: {
    open: true,
    port: 9020,
    https: false,
    hotOnly: false,
    proxy: {
      "/api": {
        target: 'http://192.168.0.59:8065/api/HrApiWeb',
        changeOrigin: true, 
        pathRewrite: {
          "^/api": '',
        }
      }
    }
  }
}
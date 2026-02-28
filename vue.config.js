const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,  // 关闭生产环境的 sourcemap
  configureWebpack: {
    resolve: {
      alias: {
        // 把 element-ui/packages 指向 element-ui/lib
        'element-ui/packages': 'element-ui/lib',
        // 把 element-ui/src 指向 element-ui/lib
        'element-ui/src': 'element-ui/lib'
      },
    },
    externals: [
      /^element-ui\/?.*/
    ],
  },
})

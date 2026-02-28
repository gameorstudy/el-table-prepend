module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset', {
        useBuiltIns: false  // 直接关闭，不需要 corejs
      }
    ]
  ]
}

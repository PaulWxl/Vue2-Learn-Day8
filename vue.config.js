// 这个文件是 vue-cli 创建出来的项目配置文件，可以对整个项目的打包和构建进行全局配置
// Webpack 在进行打包的时候，底层用到了 node.js - 所以在 vue.config.js 中可以导入并使用 node.js 中的核心模块
// 所以，导入 Node.js 中的 path 模块
const path = require('path')
// path 拼接  - 使用 path.join 方法 - 得到绝对路径
const themePath = path.join(__dirname, './src/theme.less')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
  css: {
    loaderOptions: {
      less: {
        // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级(不要删 modifyVars)，直接配置选项。
        lessOptions: {
          modifyVars: {
            // 直接覆盖变量 - 变量名在对应的组件中会写，往下拉，注意复制过来的时候不要加 @ 符号
            // 'nav-bar-background-color': '#4e6efb',
            // 'nav-bar-title-font-size': '16px',
            // 'nav-bar-title-text-color': '#fff'
            // 或者可以通过 less 文件覆盖（文件路径为绝对路径）- 绝对路径：从盘符开始的路径
            // 注意，这里使用的是模版字符串，路径放在 ${} 内部。
            hack: `true; @import "${themePath}";`,
          },
        },
      },
    },
  },
  publicPath: './'
}

// 此文件用于增加一些webpack配置，或者覆盖默认的webpack配置
const path = require('path')
const CracoLessPlugin = require('craco-less');

module.exports = {
  // 重写 webpack 任意配置
  webpack: {
    alias: {// 扩展 webpack alias（别名）
      '@': path.resolve(__dirname, 'src'),
      'src': path.resolve(__dirname, 'src'),
      'components': path.resolve(__dirname, 'src/components')
    },
  },

  // 配置使用插件
  plugins: [
    { plugin: CracoLessPlugin },  //解析less
  ],
}
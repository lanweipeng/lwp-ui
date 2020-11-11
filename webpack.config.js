const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
  entry: './src/main.js',//入口
  output: {//出口
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.min.js'
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
           { loader: 'html-loader' },
           { loader: 'markdown-loader', options: {} }
        ]
     },
      { test: /\.vue$/, use: ['vue-loader'] },
    {test:/\.js$/,use:['babel-loader']},
      { test: /\.scss$/, use: ['style-loader','css-loader','sass-loader'] }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js' //内部为正则表达式  vue结尾的
    }
  },
  plugins:[new VueLoaderPlugin()]
}
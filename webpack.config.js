var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
  entry: SRC_PATH,
  //输出的文件名 合并以后的js会命名为bundle.js
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },
  // npm install webpack-dev-server --save-dev
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    port:7070
  },
  // npm install css-loader style-loader --save-dev
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: SRC_PATH
      },
      // npm install babel-loader babel-preset-es2015 --save-dev
      {
        test: /\.jsx?$/,
        loader: 'babel',
        include: SRC_PATH,
        query: {
          presets: ['es2015']
        }
      },
      {
        test:/\.js[x]?$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        query:{
            presets: ['es2015','react']
        }
      },
      //npm install url-loader --save-dev
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=40000'
      }
    ]
  },
  //添加我们的插件 会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Hello World test'
    })
  ]
};
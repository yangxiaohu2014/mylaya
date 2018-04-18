var path = require('path')
var utils = require('./utils')
var config = require('./config')
var webpack = require('webpack')

function pathResolve (p) {
  return path.join(__dirname, '..', p)
}

module.exports = {
  entry: {
    'layalib': [
      pathResolve('./bin/libs/laya.core.js'),
      pathResolve('./bin/libs/laya.webgl.js'),
      pathResolve('./bin/libs/laya.ui.js')
    ],
    index: pathResolve('./src/index')
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: (process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath)
  },
  resolve: {
    extensions: [/*'.ts', */'.js', '.json'],
    alias: {
      '@': pathResolve('src')
    }
  },
  externals: {
    'Laya': 'Laya'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [pathResolve('src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}

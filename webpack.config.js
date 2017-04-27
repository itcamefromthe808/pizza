const path = require('path')
const webpack = require('webpack')

const stores = require('./src/assets/store-locator.json')
const menu = require('./src/assets/menu.json')

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
            // 'sass': ExtractTextPlugin.extract({
            //   'loader': 'css-loader!sass-loader?indentedSyntax',
            //   'fallbackLoader': 'vue-style-loader'
            // })
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'dominos$': 'pizzapi/dominos-pizza-api.js'
    }
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/power': {
        target: 'https://order.dominos.com',
        secure: false,
        changeOrigin: true,
        proxyTimeout: 500,
        onError: (noterror, req, res) => {
          res.writeHead(200, {
            'Content-Type': 'application/json'
          })
          if ((/store\-locator/).test(req.path)) {
            res.end(JSON.stringify(stores))
          } else {
            res.end(JSON.stringify(menu))
          }
        }
      }
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}

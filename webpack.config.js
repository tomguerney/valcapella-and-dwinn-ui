const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env) => {
  const isProduction = env === 'production'
  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, './build'),
      filename: 'bundle.js',
    },
    mode: isProduction ? 'production' : 'development',
    module: {
      rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(jpg|png|mp3)$/,
          use: {
            loader: 'file-loader',
            options: {
              esModule: false,
            },
          },
        },
        {
          test: /\.txt$/,
          use: {
            loader: 'raw-loader',
          },
        },
      ],
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
    },
    plugins: [new CopyWebpackPlugin([{ from: 'favicons' }, { from: 'public' }])],
  }
}

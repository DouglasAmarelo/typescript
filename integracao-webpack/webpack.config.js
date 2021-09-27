const path = require('path');
const copyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production', // or development
  entry: './src/main.ts',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  output: {
    filename: 'app.min.js',
    path: path.join(__dirname, 'dist'),
  },
  plugins: [new copyPlugin({ patterns: [{ from: 'public' }] })],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};

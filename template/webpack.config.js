
module.exports = {
  entry: './app.ts',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /\.tsx?$/,
        loaders: ['awesome-typescript-loader']
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }]
  },
};

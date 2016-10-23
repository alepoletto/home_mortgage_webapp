var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.scss$/,
       loader: 'style!css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap'
    },
    {
    test: /\.css$/,
    loader: 'style!css?modules',
    include: /flexboxgrid/,
  }]
  },
  plugins: [
       new ExtractTextPlugin('style/style.css', {
           allChunks: true
       })
   ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port:3000
  }
};

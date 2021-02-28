var path = require('path');

module.exports = {
  
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
          },
        ]
      },

    entry: './src/state/test.js',
    output: {
        filename: 'test.js',
        path: path.resolve(__dirname, 'dist'),
    },

    optimization: {
      minimize: false
  },

};
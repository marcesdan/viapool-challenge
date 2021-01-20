const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const paths = require('./paths');

module.exports = {
  // Where webpack looks to start building the bundle
  entry: [`${paths.src}/index.jsx`],
  // Where webpack outputs the assets and bundles
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },
  // Customize the webpack build process
  plugins: [
    // Removes/cleans build folders and unused assets when rebuilding
    new CleanWebpackPlugin(),
    // Copies files from target to destination folder
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.src}/assets`,
          to: paths.public,
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          // noErrorOnMissing: true,
        },
      ],
    }),
    // Generates an HTML file from a template
    // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
    new HtmlWebpackPlugin({
      title: 'Drivers App',
      favicon: `${paths.src}/assets/icons/favicon.png`,
      template: `${paths.public}/index.html`, // template file
      filename: 'index.html', // output file
    }),
    new Dotenv({
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
    }),
  ],
  // Determine how modules within the project are treated
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.(js|jsx)$/, exclude: /node_modules/, use: ['babel-loader'] },
      // Styles: Inject CSS into the head with source maps
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1 },
          },
          { loader: 'sass-loader', options: { sourceMap: true } },
        ],
      },
      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },
      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};

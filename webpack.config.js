const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require ('path');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Restaurant Page",
            template:"src/index.html"
        })
    ],
    devServer: {
        static: './dist',
        watchFiles: ['src/**/*.html', "dist/**/*"],
        open: true,
    },
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
        ],
      },
}
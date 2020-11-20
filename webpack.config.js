const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    context: __dirname + '/src',
    entry: './main.ts',
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader', 'angular2-template-loader']
            },      
            {
                test: /\.js$/,
                exclude: /'node_modules'/,
                loader: 'babel-loader'
            },
            {
                test: /\.(html|css)$/,
                use: 'raw-loader'
            },
            {
                test: /\.(scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {loader: 'url-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' })
    ]
}
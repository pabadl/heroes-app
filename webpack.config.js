const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/main.ts',
    resolve: {
        extensions: ['.js', '.ts', '.html', '.scss']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader', 'angular2-template-loader']
            },
            { 
                test: /\.(ts|js)$/, 
                loaders: ['angular-router-loader'] 
            },      
            {
                test: /\.js$/,
                exclude: /'node_modules'/,
                loader: 'babel-loader'
            },
            { 
                test: /\.html$/, 
                use: 'html-loader' 
            },
            {
                test: /\.css$/,
                use: 'raw-loader'
            },
            { test: /\.(s*)css$/, use: ['to-string-loader','style-loader','css-loader','sass-loader'] },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {loader: 'url-loader'}
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ],
    devServer: {
        historyApiFallback: false
    }
}
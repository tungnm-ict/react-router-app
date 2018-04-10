var path = require('path');

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    },
    mode: 'development'
}
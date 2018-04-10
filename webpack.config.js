var path = require('path');

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve:{
        alias: {
            Basic: path.resolve(__dirname, 'app/basic/basic.jsx'),
            Params: path.resolve(__dirname, 'app/params/params.jsx'),
            Auth: path.resolve(__dirname, 'app/redirect_auth/Auth.jsx'),
            CustomLink: path.resolve(__dirname, 'app/custom_link/CustomLink.jsx'),
        }
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
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
            PreventingTransitions: path.resolve(__dirname, 'app/preventing_transitions/PreventingTransitions.jsx'),
            NoMatch: path.resolve(__dirname, 'app/no_match/NoMatch.jsx'),
            Recursive: path.resolve(__dirname, 'app/recursive_path/Recursive.jsx'),
            SideBar: path.resolve(__dirname, 'app/side_bar/SideBar.jsx'),
            AnimatedTransitions: path.resolve(__dirname, 'app/animated_transitions/AnimatedTransitions.jsx'),
            AmbiguousMatches: path.resolve(__dirname, 'app/ambiguous_matches/AmbiguousMatches.jsx'),
            RouteConfig: path.resolve(__dirname, 'app/route_config/RouteConfig.jsx'),
            ModalGallery: path.resolve(__dirname, 'app/modal_gallery/ModalGallery.jsx'),
            StaticRouterExample: path.resolve(__dirname, 'app/static_router/StaticRouterExample.jsx'),   
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
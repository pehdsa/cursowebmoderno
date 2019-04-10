const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        rules:[
            {
                test: /\.s?[ac]ss$/, // essas expressão regular encontra: '.css', '.scss', 'sass'
                use: [
                    MiniCssExtractPlugin.loader,
                    //'style-loader', // Adiciona o "style" pelo javascript
                    'css-loader', // interpreta os @imports e urls
                    'sass-loader'
                ]
            }
        ]
    }
}
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 次の行になにもない場合もカンマを付けてあげる

module.exports = {
    entry: './src/javascripts/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'javascripts/main.js'
    },
    module: {
        rules: [
            {
                // test：ファイル名を検知する
                test: /\.css/,
                // use：どのローダーを使うか
                use: [
                    // ローダーは下から上に適用されていく
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            // 画像名と拡張子をそれぞれ保つ
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.pug/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true,
                        }
                    }
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './stylesheets/main.css',
        }),
        new HtmlWebpackPlugin({
            // templateに設定したhtml要素にcss,jsのビルドされた内容が格納される親のような役割
            template: './src/templates/index.pug',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            // templateに設定したhtml要素にcss,jsのビルドされた内容が格納される親のような役割
            template: './src/templates/access.pug',
            filename: "access.html",
        }),
        new CleanWebpackPlugin(),
    ],
}
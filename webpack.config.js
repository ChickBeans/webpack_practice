const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// 次の行になにもない場合もカンマを付けてあげる

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
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
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            // templateに設定したhtml要素にcss,jsのビルドされた内容が格納される親のような役割
            template: './src/index.html',
        }),
    ],
}
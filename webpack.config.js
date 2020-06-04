const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 次の行になにもない場合もカンマを付けてあげる

module.exports = {
    // ビルド設定、デフォルトはproduction
    mode: 'development',
    // 読みやすいコードに変換
    devtool: 'source-map',
    entry: './src/javascripts/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'javascripts/main.js'
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /\node_modules/, // npm対象外
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            // babelのライブラリを束ねているプリセット
                            presets: [
                                ['@babel/preset-env', { 'targets': '> 30%, not dead' }],
                                '@babel/preset-react',
                            ],
                        },
                    },
                ],
            },
            {
                // test：ファイル名を検知する
                test: /\.(css|sass|scss)/,
                // use：どのローダーを使うか
                use: [
                    // ローダーは下から上に適用されていく
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            // devtoolでsassファイルを表示できる 重い
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg|jpeg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            // 画像名と拡張子をそれぞれ保つ
                            name: 'images/[name].[ext]',
                        },
                    },
                    {
                        // ファイルサイズの圧縮する
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
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

        // pugファイルをhtmlに変換して出力してくれる
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
        new HtmlWebpackPlugin({
            // templateに設定したhtml要素にcss,jsのビルドされた内容が格納される親のような役割
            template: './src/templates/members/taro.pug',
            filename: "members/taro.html", //出力後
        }),
        new CleanWebpackPlugin(),
    ],
}
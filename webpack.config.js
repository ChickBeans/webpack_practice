const path = require('path');

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
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                ],
            },
        ],
    },
}
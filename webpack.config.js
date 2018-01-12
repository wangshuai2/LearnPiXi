module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './public',  // 访问目录
        historyApiFallback: true, // 不跳转
        inline: true,  // 实时刷新 
        compress: false,
        port: 8089
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader'
                },
                exclude: /node_modules/
            }
        ]
    }
}
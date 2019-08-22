const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "reading-record.js",
        path: __dirname + "/dist"
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.js' or '.jsx' extension will be handled by 'babel-loader'.
            { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: "babel-loader" },

            // All CSS/Sass files will be extracted to a CSS file, rather than loaded inline.
            { test: /\.(scss|css)$/, use: [MiniCSSExtractPlugin.loader, 'css-loader', 'sass-loader'] },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new MiniCSSExtractPlugin({
            filename: 'reading-record.css',
            chunkFilename: '[id].css',
            ignoreOrder: false // Enable to remove warnings about conflicting order
        }),
    ],

    mode: 'development'
};
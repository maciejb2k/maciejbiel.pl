/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const config = {
    entryFile: "./src/index.ts",
    outputFile: "bundle.js",
    outputFolder: "dist"
}

module.exports = {
    mode: "development",
    entry: config.entryFile,
    output: {
        path: path.resolve(__dirname, config.outputFolder),
        filename: config.outputFile,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "images/",
                        },
                    },
                ],
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "fonts/",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/template/App.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
        }),
    ],
    resolve: {
        alias: {
            app: path.join(__dirname, "..", "src")
          }
    },
};

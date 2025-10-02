const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output:{
        filename:"main.js",
        path: path.resolve(__dirname, "dist"),
        clean:true,
    },
    devtool: "eval-source-map",
    devServer: {
        watchFiles: ["./src/resTemplate.html"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/resTemplate.html",
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "disabled",
            generateStatsFile: false,
            statsOptions: {source: false}
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use:["style-loader","css-loader"],
            },
        ],
    },
};
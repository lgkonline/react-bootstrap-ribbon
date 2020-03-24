const path = require("path");
// const globAll = require("glob-all");
const TerserJSPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
// const PurgecssPlugin = require("purgecss-webpack-plugin");

const PATHS = {
    src: path.join(__dirname, "docs/src"),
    dist: path.join(__dirname, "docs/public")
};

module.exports = {
    context: PATHS.src,
    entry: [
        "./index.js",
    ],
    output: {
        path: PATHS.dist,
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    "babel-loader",
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    resolve: {
        modules: [
            path.join(__dirname, "node_modules"),
        ],
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        // new PurgecssPlugin({
        //     paths: globAll.sync([`${PATHS.src}/**/*`, `${PATHS.dist}/**/*`], { nodir: true })
        // })
    ]
};
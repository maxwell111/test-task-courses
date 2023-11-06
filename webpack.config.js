const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (env) => {
  const envMode = env.production === true ? "production" : "development";
  const publicPathVar = envMode === "production" ? "/test-task-courses/" : "/";

  return {
    mode: envMode,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: publicPathVar,
    },
    devServer: {
      static: { directory: path.join(__dirname, "dist") },
      port: 8888,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            { loader: "vue-style-loader" },
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                esModule: false,
              },
            },
            { loader: "css-loader" },
            { loader: "sass-loader" },
          ],
        },
        {
          test: /\.vue$/i,
          exclude: /(node_modules)/,
          use: {
            loader: "vue-loader",
          },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        {
          test: /\.svg$/,
          use: ["babel-loader", "vue-svg-loader"],
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin(),
      new HtmlWebpackPlugin({
        template: "./index.html",
      }),
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(envMode),
          LOCAL_API_URL: JSON.stringify("http://localhost:3000"),
          PROD_API_URL: JSON.stringify(
            "https://my-json-server.typicode.com/maxwell111/test-task-courses",
          ),
        },
      }),
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: "styles",
            type: "css/mini-extract",
            chunks: "all",
            enforce: true,
          },
        },
      },
      realContentHash: false,
    },
  };
};

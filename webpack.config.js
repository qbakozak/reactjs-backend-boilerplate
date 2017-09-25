const path = require("path")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const watch = process.env.NODE_ENV === "production" ? false : true

module.exports = {
  entry: path.join(__dirname, "/client/src/index.js"),
  output: {
    path: path.join(__dirname, "/client/dist/js"),
    filename: "app.js"
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        include: path.join(__dirname, "/client/src"),
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, "/client/src"),
        loader: ExtractTextPlugin.extract("css-loader!sass-loader")
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: "file-loader",
        options: {
          name: "/images/[name].[ext]"
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "../../../client/dist/css/[name].css",
      disable: false,
      allChunks: true
    })
  ],
  watch
}

const dev = process.env.NODE_ENV !== "production";
const path = require( "path" );
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );
const FriendlyErrorsWebpackPlugin = require( "friendly-errors-webpack-plugin" );
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const plugins = [
    new FriendlyErrorsWebpackPlugin(),
];

if ( !dev ) {
    plugins.push( new BundleAnalyzerPlugin( {
        analyzerMode: "static",
        reportFilename: "webpack-report.html",
        openAnalyzer: false,
    } ) );
}

module.exports = {
    mode: dev ? "development" : "production",
    context: path.join( __dirname, "src" ),
    devtool: dev ? "none" : "source-map",
    entry: {
        app: "./client.js",
    },
    output: {
        path: path.resolve( __dirname, "dist" ),
        filename: "[name].bundle.js",
    },
    resolve: {
        modules: [
            path.resolve( "./src" ),
            "node_modules",
        ],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                }),
            },
            {
                  test: /\.(jpg|png)$/,
                  use: {
                    loader: "file-loader",
                    options: {
                      name: "[path][name].[hash].[ext]",
                    },
                  },
                },
            {
                use: ExtractTextPlugin.extract({
                    use: 'css-loader',
                }),
                test: /\.css$/
            },
            {
              test: /\.json$/,
              loader: 'json-loader'
            },
        ],
    },
    
    plugins,
};

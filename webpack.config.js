const path = require("path");
const webpack=require("webpack");
const HtmlWebpackPlugin=require("html-webpack-plugin");

module.exports = function(env){
  var prod=env !==undefined && env.production===true;
  var dev=env !==undefined && env.production===true;
    
    return {
   // entry: './src/js/app.js',
    entry: {
      app:"./src/js/app.js",
    vendors:["jquery"]
    },
    output: {
        publicPath:dev ? "/dist/": "",
//       filename: 'bundle.js',
         path: path.resolve(__dirname, "dist/"),
     filename:true? "[name].[chunkhash].js":"[name].js"
       
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
    }
  ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:"vendors"
        })
    ]
};

};
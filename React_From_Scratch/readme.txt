npm installs
- webpack
- react, reactdom
- babel-loader, babel-core
- babel-es2015-preset, babel-react-preset


webpack.config.js
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname + "/src",
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
	module: {
	  loaders: [
		  { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
		  { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
	  ]
	}
};




.babelrc
{
	"presets":["env","es2016","react"]
}
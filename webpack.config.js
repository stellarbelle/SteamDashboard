var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './client/js/app.js',
	output: { path: __dirname, filename: 'bundle.js' },
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'react']
				}
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass']
			},
			{
				test: /\.(jpg|png)$/,
				loader: 'file?name=[path][name].[hash].[ext]',
			}
		]
	},

	devServer: {
		proxy: {
			'/api/*': {
				target: 'http://localhost:10666',
				secure: false
			},
			'/auth/*': {
				target: 'http://localhost:10666',
				secure: false
			}
		}
	},

	devtool: '#inline-source-map'
};

const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.export = {
	entry: './public/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.js',
	},
	plugin: [
		new HTMLWebpackPlugin({
			template: './public/index.html',
		}),
	],
};

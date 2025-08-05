const { getPath } = require('../utils');
const {
	copyWebpackPlugin,
	miniCssExtractPlugin,
	htmlWebpackPlugin,
} = require('./plugins');

module.exports = {
	context: getPath('src'),
	entry: './index.js',
	output: {
		filename: '[name].js',
		path: getPath('build'),
		clean: true,
	},

	plugins: [htmlWebpackPlugin, copyWebpackPlugin, miniCssExtractPlugin],

	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [miniCssExtractPlugin.constructor.loader, 'css-loader'],
			},
			{
				test: /\.s[ac]ss$/i,
				use: [
					miniCssExtractPlugin.constructor.loader,
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							postcssOptions: {
								plugins: [require('postcss-preset-env')],
							},
						},
					},
					'sass-loader',
				],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]',
				},
			},
			{
				test: /\.(jpe?g|png|webp|gif)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/[name][ext]',
				},
			},
			{
				test: /\.svg$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/icons/[name][ext]',
				},
			},
			{
				test: /\.mp3$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/sounds/[name][ext]',
				},
			},
		],
	},
};

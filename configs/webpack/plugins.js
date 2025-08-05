const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { getPath } = require('../utils');

module.exports = {
	htmlWebpackPlugin: new HtmlWebpackPlugin({
		template: getPath('public/index.html'),
	}),

	miniCssExtractPlugin: new MiniCssExtractPlugin({
		filename: '[name].css',
	}),

	copyWebpackPlugin: new CopyPlugin({
		patterns: [
			{
				from: getPath('public/assets'),
				to: getPath('build/assets'),
			},
			{
				from: getPath('public/fonts'),
				to: getPath('build/fonts'),
			},
		],
	}),

	cssMinimizerPlugin: new CssMinimizerPlugin(),
	terserPlugin: new TerserPlugin(),
};

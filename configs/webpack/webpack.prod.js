const { merge } = require('webpack-merge');
const { cssMinimizerPlugin, terserPlugin } = require('./plugins');
const webpackCommon = require('./webpack.common');

module.exports = merge(webpackCommon, {
	mode: 'production',
	devtool: 'source-map',

	optimization: {
		minimize: true,
		minimizer: [cssMinimizerPlugin, terserPlugin],
		splitChunks: {
			cacheGroups: {
				default: false,
				vendors: false,
				vendor: {
					chunks: 'all',
					name: 'vendor',
					test: /node_modules/,
				},
			},
		},
	},
});

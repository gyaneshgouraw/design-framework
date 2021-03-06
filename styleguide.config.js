const { version } = require('./package');

module.exports = {
	components: 'src/components/**/[A-Z]*.js',
	defaultExample: true,
	ribbon: {
		url: 'https://github.com/styleguidist/react-styleguidist',
	},
	version,
	webpackConfig: {
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
				},
				{
					test: /\.css$/,
					use:[
						{ loader: "style-loader" },
						{ loader: "css-loader",
							query:{
							modules:true
							}
						}
					]
				},
			],
		},
	},
};

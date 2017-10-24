const 	webpack 		= require('webpack'),
		autoprefixer 	= require('autoprefixer')

module.exports = {
	entry: './views/index.js',
	output: {
		filename: './static/bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loaders: 'babel-loader'
			},

			{
				test: /\.css$/,
				loaders: [
					'style-loader',
					'css-loader'
				]
			},

			{
				test: /\.sass$/,
			    exclude: /node_modules/,
			    loaders: [
			      'style-loader',
			      {
			        loader: 'css-loader',
			        query: {
			          sourceMap: true
			        }
			      },
			      {
			        loader: 'sass-loader',
			        query: {
			          outputStyle: 'expanded',
			          sourceMap: true
			        }
			      }
			    ]
			}
		]
	},
	plugins: [
			new webpack.LoaderOptionsPlugin({ options: { postcss: [ autoprefixer ] } })
	]
}
const webpack = require('webpack');
const ExtratTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
    	path: __dirname + '/public',
    	filename: './app.js'
    },
    devServer:{
    	port: 8080,
    	contentBase: './public'
    },

    resolve:{
        extensions: ['', '.js', '.jsx']
    },
    plugins:[
    	new ExtratTextPlugin('app.css')
    ],
    module: {
    	loaders: 
    	[
	    	{
	    		test: /.jsx?$/,
	    		loader: 'babel-loader',
	    		exclude: /node_modules/,
	    		query:
	    		{
	    			presets:['es2015', 'react'],
	    			plugins: ['transform-object-rest-spread']
	    		}
	    	},
	    	{
    			test: /\.css?$/,
    			loader: ExtratTextPlugin.extract("style-loader", "css-loader")
	    	},
			{
					test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
					loader: 'file'
			}

    	]
    }
}

var webpack=require('webpack');
var ET=require('extract-text-webpack-plugin');
module.exports={
	entry:__dirname+"/src/scripts/app.js",
		
	output:{
		path:__dirname+"/prd",
		filename:"bundle.js"
	},
	devtool:'source-map',
	 // devserver配置
	devServer: {
	    contentBase: __dirname + '/prd',
	    port: 80,
	    inline: true,
	    proxy:{
	    	'/rest/*':{
	    		target:'http://localhost:8888',
	    		secure:false,
	    		pathRewrite:{
	    			'^/rest':''
	    		}
	    	}
	    }
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				loader:'babel'
			},
			{
				test:/\.css$/,
				loader:'style!css'
			},
			{
				test:/\.scss$/,
				loader:ET.extract('style','css!sass')
			},
			{
				test:/\.string$/,
				loader:'string'
			},
			{
				test:/\.vue$/,
				loader:'vue'
			}
		]
	},
	//vue
	vue:{
		loaders:{
			js:'babel'
		}
	},
	plugins:[
		new ET('bundle.css')
	]
}

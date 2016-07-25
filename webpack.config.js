var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
//node核心模块
var path = require('path');
// 提取出来的图片放到bin/css文件夹
var extractCSS = new ExtractTextPlugin('[name].[hash].css');
module.exports = {
	// 入口点有两个，一个是app.js
	// 另一个是venders.js包括第三方引用模块，这么做防止把第三方代码和自己的代码打包
	entry:{
		app:'./src/main.js',
		'vendors':['vue','marked']
	},
	// 生成的文件名为app.[hash].bundle.js

	output:{
		path:'./bin',
		publicPath:'bin/',
		filename:'[name].[hash].bundle.js'
	},
	// 方便打断点
	devtool:"#source-map",
	module:{
		loaders:[
			//加载vue 
		  {test:/\.vue$/,exclude:/node_modules/,loader:'vue'},
		  // 加载css并打包
 		  { test: /\.css$/,
 		  	exclude:/node_modules/,
 		  	loader: extractCSS.extract("style", "css")
 		  },
          // 加载babel
    	  {test:/\.jsx?$/,exclude:/node_modules/,loader:"babel"},
    	  // 加载html
          {test:/\.html$/,exclude:/node_modules/,loader:"raw-loader"},
          // 加载sass
          {test:/\.(scss|sass)$/i,exclude:/node_modules/,
          	loader:extractCSS.extract(['css','sass'])
          },
          // 图片文件使用 url-loader 来处理，小于8kb的直接转为base64,超过就会输出到output的path
		  {test:/\.(png|jpe?g|gif)$/,exclude:/node_modules/,loader: 'url-loader?limit=1024&name=assets/imgs/[name].[ext]'},
		  // 字体
		  { test: /\.(woff2|woff|ttf|eot|svg|otf)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
		    loaders: ["url-loader?limit=1000&name=assets/fonts/[name].[ext]"]
		  },
		  {test:/\.json$/,exclude:/node_modules/,
		  	loaders: ["url-loader?limit=1000&name=assets/image/[name].[hash].[ext]"]
		  }
		]
	},
	
	plugins:[
	// 上面这样设置之后，Webpack会检测各个入口文件生成的代码，
	// 如果里面引用的代码有出现在vendors列表里的话，
	// 会被自动抽出来放到./js/vendors.[hash].js里。
		new webpack.optimize.CommonsChunkPlugin('vendors','vendors.[hash].js'),
		extractCSS,
		// 自动生成html的页面，template为路径，目标可以加载到html里面
		// title为文件title
		// filename为生成的文件名，可以前面加路径
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'src/module.html'),
			title:'sunopar\'s World',
			filename:'../index.html'
		})
	],
	//这里用于安装babel，如果在根目录下的.babelrc配置了，这里就不写了
	babel: {
	     presets: ['es2015','stage-2'],
	     plugins: ['transform-runtime']
	},
	// 对于vue后缀文件的css进行提取打包，vue后缀的js用babel转义
	vue:{
	    loaders:{
	      js:'babel',
	      scss:extractCSS.extract(['css','sass']),
	      css:extractCSS.extract("style-loader", "css-loader")
	    }
  	},
  	// 将script脚本加载的bootstrap和jquery作为全局变量暴露出来
  	externals:{
  		"bootstrap":"bootstrap",
  		"jquery":"jQuery",
  		"jquery":"$"
  	}

}
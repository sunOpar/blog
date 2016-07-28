const path = require('path');
function travel(src,dst){
	const fs = require('fs');
	// json的包裹层
	var articles = [];
	// 按顺序存放在article[]中
	var count = -1;
	var arr = -Infinity;
	// 遍历目录文件
	// 格式化路径
	src = path.normalize(src);
	// 遍历所有文件
	arr = fs.readdirSync(src);
	fs.readdirSync(src).forEach(function(file){
		var pathname = path.join(src,file);
		callbackFunc(pathname,dst);
	});
	// 读取文件
function callbackFunc(pathname,dst){
	var rs = fs.createReadStream(pathname);
	rs.on('data',function(chunk){
		rs.pause();
		read(chunk,dst,function(){
			rs.resume();
		});
	});
	rs.on('end',function(){
		cleanUp();
	})
}
var read=(data,dst)=>{
	count++;
	var obj = {};
	var newarr = [];
	data = data.toString('utf-8').split('---')[1];
	if(data){
		data = data.split('\n');
		// ['title:img','categories:[test]','data:2016-07-01']
		data.forEach(function(currentValue,index,arr){
			if (!currentValue) {
				arr.splice(index,1);
			}
		});
		// { title: 'Image', categories: '[test]', date: '2016-07-01' }
		data.forEach(function(currentValue,index,arr){
			newarr = currentValue.split(':');
			// obj['aa'] = 'aa';
			if(newarr[1]){
				obj[newarr[0]] = newarr[1].trim();
			}
		});
		if(obj.title){
			articles[count] = obj;
			console.log(articles[count]);
		}
	}
	if(count+1 == arr.length){
		// articles = JSON.stringify(articles);
		var wrap = {};
		wrap.articles = articles;
		wrap = JSON.stringify(wrap,null,'\t');
		var ws = fs.createWriteStream(dst);
		write(wrap,ws);
	}
}
// 写文件
var write = (obj,ws)=>{
	ws.write(obj);
}
}

travel(path.join(__dirname,'../../_posts'),path.join(__dirname,'../assets/data/articleList.json'));
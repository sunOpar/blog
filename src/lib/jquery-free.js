// bind方法创建一个新函数，并将document作为this值
var $ = document.querySelectorAll.bind(document);
// 将Nodelist转为数组
// myList = Array.prototype.slice.call(myNodeList);
// on事件监听
Element.prototype.on = Element.prototype.addEventListener;
NodeList.prototype.on = function(event, fn) {
		[]['foreach'].call(this, function(el) {
			el.on(event, fn);
		});
		return this;
	}
// 事件触发
Element.prototype.trigger = function(type, data) {
	var event = document.createEvent('HTMLEvents');
	event.initEvent(type, true, true);
	event.data = data || {};
	event.eventName = type;
	this.dispatchEvent(event);
	return this;
};
NodeList.prototype.trigger = function(event){
	[]['forEach'].call(this,function(el){
		el['trigger'](event);
	})
};
var jfAjax = (function(){
	function request(type,url,opts,callbacl){
		var xhr = new XMLHttpRequest();
		if(typeof opts === 'function'){
			callback = opts;
			opts = null;
		}
		xhr.open(type,url);
		var fd = new FormData();
		if(type === 'post' && opts){
			for(var key in opts){
				fa.append(key,JSON.stringify(opts[key]));
			}
		}
		xhr.onload = function(){
			callback(JSON.parse(xhr.response));
		};
		xhr.send(opts? fd:null);
	}
	var get = request.bind(this,'GET');
	var post = request.bind(this,'POST');	
	return {
		get:get,
		post:post
	}
})();

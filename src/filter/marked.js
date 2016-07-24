const marked = require('marked');
import vue from 'vue'
vue.filter('marked',(value)=>{
	if(value){
	  return marked(value);
	}
})
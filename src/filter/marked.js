const marked = require('marked');
export default (value)=>{
	if(value){
	  return marked(value);
	}
}
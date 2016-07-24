import vue from 'vue'
vue.filter('trimLine',(value)=>{
	// console.log(value);
	if(value){
	console.log(value.split('---')[2]);
	return value.split('---')[2].trim();	
	}
	
})
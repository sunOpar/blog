import vue from 'vue'
vue.filter('trimLine',(value)=>{
	if(value){
	return value.split('---')[2].trim();	
	}
	
})
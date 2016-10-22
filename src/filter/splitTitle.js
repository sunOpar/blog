import vue from 'vue'
export default vue.filter('splitTitle',(value)=>{
	let word = value.split(' ');
	let char = word.map((currentV,index)=>{
		return currentV.split('');
	});
	char = char.map((currentV,index,arr)=>{
		let child = currentV.map((currentChildV,childIndex)=>{
			return  '<span class="char'+(childIndex+1)+'">'
					+'<span class="char1">'
					+currentChildV
					+'</span>'
					+'</span>';
		});
		return child;
	});
	word = char.map((currentV,index,arr)=>{
		return '<span class="word'+(index+1)+'">'+currentV.join('')+'</span>';
	});
	return word.join('');
});
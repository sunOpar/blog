<template>
	<div class="articleWrap container">
		<div class="articleBody" v-html="article"></div>
	</div>
</template>
<script>
	import vue from 'vue'
	import trimLine from '../filter/trimLine.js'
	import marked from '../filter/marked.js'
export default{
	data(){
		return {
			article:''
		}
	},
	methods:{
		successCallback:function(res){
			this.article = marked(trimLine(res.data));
		}
	},
	created:function(){
		let routePath = this.$route.params;
		routePath = routePath.articleName;
		this.$http.get('../_posts/'+routePath+'.md')
		.then(this.successCallback)
		.catch((res)=>{
			this.successCallback(res);
		})
	},
	route:{
	    data:function(transition){
	      console.log('data钩子');
	      transition.next();
	    }
  	}
}
</script>
<style lang="scss" scoped>
.progress{
	color:black;
	font-size: 6rem;
}
@media(max-width:768px){
	.articleWrap{
		width: 80%;
		margin:auto;
		// margin-left: 1rem;
		// margin-right: 1rem;
	}
}
	
	.articleWrap{
		background-color: #fff;
		margin:auto;
		width: 700px;
	}

	.articleBody{
		padding: 2rem;
	}
	
</style>
<template>
	<div class="articleWrap container">
		<div v-if="$loadingRouteData">dasdsadasdsad</div>
		<div class="articleBody">{{{article | trimLine |marked}}}</div class="articleBody">
	</div>
</template>
<script>
	import vue from 'vue'
	import '../filter/trimLine.js'
	import '../filter/marked.js'
export default{
	data(){
		return {
			article:''
		}
	},
	methods:{
		successCallback:function(res){
			this.article = res.data;
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
	    data:function(transtion){
	      console.log('data钩子');
	      console.log('loading:',transtion.$loadingRouteData);
	    }
  	}
}
</script>
<style lang="scss" scoped>
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
		width: 80%;
	}

	.articleBody{
		padding: 2rem;
	}
	
</style>
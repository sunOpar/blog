<template>
	<div class="articleWrap container">
		<div class="row">
			<div class="articleBody col-sm-offset-2 col-sm-8">{{{article | trimLine |marked}}}</div class="articleBody">
		</div>
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
}
</script>
<style lang="scss">
	.articleBody{
		color: #000;
		margin-top: 50px;
	}
	.articleWrap{
		background-color: #fff;
	}
</style>
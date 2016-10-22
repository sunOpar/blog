<template>
<div class="artListContent container">
	<div class="blogBody">
		<div class="row">
			<section v-for="item in items" class="post-preview col-sm-10 col-sm-offset-2 col-xs-10 col-xs-offset-2">
				<router-link to="{path:item.url,append:true}"><h2 class="post-title">{{item.title}}</h2></router-link>
				<p class="post-date">{{item.date | convertDate}}</p>
			</section>
		</div>
	</div>
</div>
</template>
<script>
let articleList= require("../../bin/data/articleList.json");
import '../filter/convertDate.js'
	export default{
		data(){
			return {
				items:[]
			}
		},
		methods:{
			successCallback:function(res){
				this.items = res.data.articles.reverse();
			}
		},
		created(){
			this.$http.get('bin/data/articleList.json')
			.then(this.successCallback)
			.catch((res)=>{
				console.log(res);
			})
		}
	}
</script>
<style lang="scss" scoped>
@media(max-width:768px){
	.artListContent .post-title{
    font-size: 2rem;
	}
	.post-preview{
		margin-left: 2rem;
	}
}

.artListContent{
	background-color: #fff;
	color:#000;
	width: 700px;
	.post-preview{
		padding-bottom: 20px;
		padding-top: 20px;
		border-bottom: 1px solid #eee;
	}
}
.post-preview a{
	&:hover{
		text-decoration: none;
	}
}
.post-title{
	font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	font-weight: 800;
	color:#000;
	font-size: 30px;
	&:hover{
		color:#23527c;
		text-decoration: none;
	}
}
.post-date{
	font-family: 'Lora', 'Times New Roman', serif;
	color: #808080;
    font-size: 1.8rem;
    font-style: italic;
}
</style>
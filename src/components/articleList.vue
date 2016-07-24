<template>
<div class="artListContent container">
	<div class="blogBody">
		<div class="row">
			<section v-for="item in items" class="post-preview col-sm-10 col-sm-offset-2">
				<a v-link="{path:item.url,append:true}"><h2 class="post-title">{{item.title}}</h2></a>
				<p class="post-date">{{item.date | convertDate}}</p>
			</section>
		</div>
	</div>
</div>
</template>
<script>
let articleList= require("../../data/articleList.json");
import '../filter/convertDate.js'
	export default{
		data(){
			return {
				items:[]
			}
		},
		methods:{
			successCallback:function(res){
				console.log(res);
				this.items = res.data.articles.reverse();
			}
		},
		created:function(){
			this.$http.get(articleList)
			.then(this.successCallback)
			.catch((res)=>{
				console.log(res);
			})
		}
	}
</script>
<style lang="scss" scoped>
@media only screen and (min-width:768px){
	.artListContent .post-title{
		font-size: 36px;
	}
}

.artListContent{
	background-color: #fff;
	color:#000;
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
    font-size: 19px;
    font-style: italic;
}
</style>
<template>
	<div class="blogWrap">
	<div class="blogHeader" v-bind:style="blogStyle"></div>
		<router-view></router-view>
	</div>
</template>
<script>
var bg = require('../assets/img/blog.jpg')
import vue from 'vue'

export default {
	data(){
		return{
			blogStyle:{
				backgroundImage:'url('+bg+')'
			},
		}
	},
}

</script>
<style lang="scss" scoped>
$bgColor:#fff;
$bgHeight:250px;
	.blogWrap{
		background-color:$bgColor;
		height: 100%;
	}
	.blogHeader{
		height:$bgHeight;
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;
	}
</style>
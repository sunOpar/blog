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
				backgroundImage:'url(bin/bound/blog.jpg)'
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
		&:after{
			content:'';
			display: block;
			clear: both;
		}
	}
	.blogHeader{
		height:$bgHeight;
		background-size: 100% 100%;
		background-position: center;
		background-repeat: no-repeat;

    -webkit-filter: blur(2px); /* Chrome, Opera */
       -moz-filter: blur(2px);
        -ms-filter: blur(2px);    
            filter: blur(2px);
	}
</style>
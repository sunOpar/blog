<template>
	<div class="banner" transtion="bannerT" v-bind:style="styleObj">
		<div class="jumbotron col-sm-offset-2 os-phrases">
			<h1 class="introduce col-sm-12" v-html="thisIntruduce"></h1>
		</div>
	</div>	
</template>
<script>
require('../lib/fontAnimate/css/default.css')
require('../lib/fontAnimate/css/component.css')
import splitTitle from  '../filter/splitTitle.js'
let bannerBg = require('../assets/img/code.jpg');
export default {
	data () {
		return {
			styleObj:{
				height:document.body.scrollHeight+'px',
				backgroundImage:'url('+bannerBg+')',

			},
			intruduce:'WELCOME TO MY WORLD'
		}
	},
	computed:{
		thisIntruduce:function(){
			return splitTitle(this.intruduce)
		}
	},
	mounted:function(){
		var that = this;
		window.addEventListener('resize',function(){
			that.styleObj.height =document.body.scrollHeight+'px';
		},false);
	}
}
</script>
<style scoped lang="scss">
.bannerT-transtion{
	transition: all .3s ease;
}
.banner {
	background-attachment: fixed;
	background-repeat: no-repeat;
	background-size: 100% 100%;
	min-height: 300px;
	max-height:100%;
	position: relative;
	z-index: -1;
	animation: fade 1.5s;

 }
@keyframes fade{
	0%   {opacity: 0;}
	50%  {opacity:0.5;}
	100% {opacity:1;}
}
.introduce{
	color:#fff;
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin:auto;
	font-size: 8rem;
	font-family: 'Dosis', 'Lato', sans-serif;

}
@media(max-width:1295px){
	.introduce{
		font-size: 7rem;
	}
}
@media(max-width: 1236px){
	.introduce{
		font-size: 5rem;
	}
}
@media(max-width: 1000px){
	.introduce{
		font-size: 3.5rem;
	}
}
@media(max-width: 768px){
	.banner{
		background-size: 100% 500px;
	}
	.introduce{
		font-size:1rem;
	}
}
.jumbotron{
	float: left;
	color: #fff;
	background-color: inherit;
}
</style>
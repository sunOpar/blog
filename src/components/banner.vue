<template>
	<div class="banner" v-bind:style="styleObj">
		<div class="jumbotron col-sm-offset-2 os-phrases">
			<h1 class="introduce col-sm-12">{{intruduce}}</h1>
		</div>
	</div>	
</template>
<script>
require('../lib/fontAnimate/css/default.css')
require('../lib/fontAnimate/css/component.css')
require('../lib/fontAnimate/js/jquery.lettering.js')
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
	ready:function(){
		var that = this;
		window.addEventListener('resize',function(){
			that.styleObj.height =document.body.scrollHeight+'px';
		},false);
	},
	attached: function(){
		console.log($('.jumbotron > h1').text());
		$('.jumbotron > h1').lettering('words').children("span").lettering().children("span").lettering();
	}
}
</script>
<style scoped lang="scss">

.banner {
	background-repeat: no-repeat;
	background-size: 100% 100%;
	min-height: 300px;
	position: relative;
	z-index: -1;
	animation: fade 5s;
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
	// height: 100px;
	font-size: 100px;
	font-family: 'Dosis', 'Lato', sans-serif;

}
@media(max-width:1295px){
	.introduce{
		font-size: 70px;
	}
}
@media(max-width: 1000px){
	.introduce{
		font-size: 50px;
	}
}
@media(max-height: 700px){
	.banner{
		background-size: 100% 700px;
	}
}
.jumbotron{
	float: left;
	color: #fff;
	background-color: inherit;
}
</style>
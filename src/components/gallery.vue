<template>
	<div class="about">
		<div class="gallery" v-bind:style="styleObj">
		</div>
	</div>
</template>
<script>
let img = require('../assets/img/gallery.jpg');
	export default{
		data(){
			return {
				gallery:'gallery',
				styleObj:{
					backgroundImage:'url(bin/bound/gallery.jpg)'
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.gallery{
		height: 300px;
		background-size: 100% 350px;
		background-repeat: no-repeat;

		-webkit-filter: blur(1px); /* Chrome, Opera */
       -moz-filter: blur(1px);
        -ms-filter: blur(1px);    
            filter: blur(1px);
	}
	.about{
		height: 100%;
		background-color: #000;
	}
</style>
<template>
	<div class="gallery" v-bind:style="styleObj">
		
	</div>
</template>
<script>
let img = require('../assets/img/gallery.jpg');
	export default{
		data(){
			return {
				gallery:'gallery',
				styleObj:{
					backgroundImage:'url('+img+')'
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
	}
</style>
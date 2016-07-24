<template>
	<div class="content">
		<router-view></router-view>
	</div>
</template>
<script>
	import vBanner from './banner.vue'
	export default{
		components:{
			vBanner:vBanner
		}
	}
</script>
<style lang="scss" scoped>
	$bg:#fff;
	.content{
		height: 100%;
	}
</style>
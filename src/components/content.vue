<template>
	<div class="content">
		<router-view></router-view>
	</div>
</template>
<script>
import vBanner from "./banner.vue";
export default {
  components: {
    vBanner: vBanner,
  },
};
</script>
<style lang="less" scoped>
.content {
  height: 100%;
}
</style>
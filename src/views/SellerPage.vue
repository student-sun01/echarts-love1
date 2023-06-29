<!-- 这个组件是对应于路由规则中 /seller 这条路径的
在这个组件中,需要展示Seller.vue这个组件
Seller.vue才是真正显示图表的组件
-->
<template>
  <div class="com-page">
    <seller></seller>
  </div>
</template>
<script>
import Seller from "@/components/seller.vue";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    seller: Seller,
  },
};
</script>
<style lang='less' scoped>
</style>
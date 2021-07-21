<template>
	<div>
<el-menu :default-active="this.$route.path" class="el-menu-demo" mode="horizontal" @select="handleSelect"     router>
  <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
    <template slot="title">
      <i class="el-icon-s-platform"></i>
      <span> {{ item.navItem }}</span>
    </template>
  </el-menu-item>
</el-menu>
 <router-view class="menu-right" />
</div>
</template>
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
		navList: [
		  { name: "/views/chip", navItem: "管理界面" },
		  { name: "/views/device", navItem: "类型界面" },
		  { name: "/views/params", navItem: "商品列表" },
		  { name: "/views/picture", navItem: "成员管理" },
		  { name: "/views/nav", navItem: "测试导航" },
		],
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
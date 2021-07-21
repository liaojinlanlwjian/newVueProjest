<template>
	<div>
		<el-col :span="2">
			<el-menu :default-active="this.$route.path" router mode="horizontal" class="el-menu-vertical-demo"
				text-color="#000" active-text-color="#ffd04b">
				<el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
					<template slot="title">
						<i class="el-icon-s-platform"></i>
						<span> {{ item.navItem }}</span>
					</template>
				</el-menu-item>
			</el-menu>
		</el-col>

		<router-view class="menu-right" /><!-- 把路由相关内容渲染在这个地方 -->
	</div>
</template>
<script>
	export default {
		data() {
			return {
				navList: [{
						name: "/views/chip",
						navItem: "管理界面"
					},
					{
						name: "/views/device",
						navItem: "类型界面"
					},
					{
						name: "/views/params",
						navItem: "商品列表"
					},
					{
						name: "/views/picture",
						navItem: "成员管理"
					},
					{
						name: "/views/nav",
						navItem: "测试导航"
					},
				],
			};
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
		},
	};
</script>

<style>
	.menu-right {
		margin-left: 200px;
	}
</style>

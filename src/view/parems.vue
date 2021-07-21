<template>
	<div id="app">
	<el-table :data="itemList" style="width: 100%">
		<el-table-column prop="name" label="日期" width="180">
		</el-table-column>
		<el-table-column prop="open_type" label="打开类型" width="180">
		</el-table-column>
		<el-table-column prop="open_type" label="打开类型" width="180">
		</el-table-column>
		<el-table-column prop="open_type" label="打开类型" width="180">
		</el-table-column>
		<el-table-column prop="open_type" label="打开类型" width="180">
		</el-table-column>
		<el-table-column label="商品图片" width="140" align='center'>
			<template scope="scope">
				<img :src="scope.row.image_src" width="100" height="100" />
			</template>
		</el-table-column>
	</el-table>
	</div>
</template>

<script>
	import axios from "axios";
	export default {
		name: "app",
		data() {
			return {
				itemList: [],
			};
		},
		mounted() {
			this.getData();
		},
		methods: {
			getData() {
				axios.get('http://localhost:3001/product_list').then(response => {
					console.log(response.data);
					this.itemList = response.data;

				}, response => {
					console.log("error");
				});
			}
		}
	}
</script>


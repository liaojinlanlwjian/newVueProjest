<template>
	<div>
  <el-carousel indicator-position="outside"  style="width:1200px">
    <el-carousel-item v-for="item in imgList" :key="item">
      <img :src="item.src" class="rightImg">
    </el-carousel-item>
  </el-carousel>
  <el-switch
    v-model="value"
    active-color="#13ce66"
    inactive-color="#ff4949">
  </el-switch>
  <br />
  <br />
  <el-input v-model="input" placeholder="请输入内容"></el-input>
  <br />
  <br />
  <br />
  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
    <el-form-item label="活动名称">
      <el-input v-model="sizeForm.name"></el-input>
    </el-form-item>
    <el-form-item label="活动区域">
      <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="活动时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
      </el-col>
      <el-col class="line" :span="2">-</el-col>
      <el-col :span="11">
        <el-time-picker placeholder="选择时间" v-model="sizeForm.date2" style="width: 100%;"></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="活动性质">
      <el-checkbox-group v-model="sizeForm.type">
        <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
        <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
        <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源">
      <el-radio-group v-model="sizeForm.resource" size="medium">
        <el-radio border label="线上品牌商赞助"></el-radio>
        <el-radio border label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</div>

	


</template>

<script>
	import axios from "axios";
	export default{
		
		name:"app",
		data() {
			return{
				value: true,
				imgList:[],
				   sizeForm: {
				          name: '',
				          region: '',
				          date1: '',
				          date2: '',
				          delivery: false,
				          type: [],
				          resource: '',
				          desc: ''
				        },
			};
		},
		mounted(){
			this.getData();
		},
		methods:{
			getData(){
				axios.get('http://localhost:3001/img_list').then(response=>{
					console.log(response.data);
					this.imgList = response.data;
				},response=>{
					console.log("error");
				});
			},
			 onSubmit() {
			        console.log('submit!');
			      }
		}
	}
	
</script>
<style>
	.rightImg {
	  width: 1200px;
	  height: 540px;
	}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  	  .is-selected {
  	    color: #1989FA;
  	  }
</style>

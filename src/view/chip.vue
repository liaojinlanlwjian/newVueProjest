<template>
	<div>
  <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
    <el-tab-pane label="用户管理" name="first"><el-collapse accordion>
  <el-collapse-item>
    <template slot="title">
      一致性 Consistency<i class="header-icon el-icon-info"></i>
    </template>
    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
  </el-collapse-item>
  <el-collapse-item title="反馈 Feedback">
    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
  </el-collapse-item>
</el-collapse></el-tab-pane>
    <el-tab-pane label="配置管理" name="second"><el-card class="box-card">
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card></el-tab-pane>
    <el-tab-pane label="角色管理" name="third"><el-steps :active="1">
  <el-step title="步骤 1" icon="el-icon-edit"></el-step>
  <el-step title="步骤 2" icon="el-icon-upload"></el-step>
  <el-step title="步骤 3" icon="el-icon-picture"></el-step>
</el-steps></el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth"><el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
<el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress></el-tab-pane>
  </el-tabs>
  <br />
  <br />
  <br />
  <el-calendar>
    <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
    <template
      slot="dateCell"
      slot-scope="{date, data}">
      <p :class="data.isSelected ? 'is-selected' : ''">
        {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
      </p>
    </template>
  </el-calendar>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
<style>
	  .is-selected {
	    color: #1989FA;
	  }
	  .text {
	      font-size: 14px;
	    }
	  
	    .item {
	      padding: 18px 0;
	    }
	  
	    .box-card {
	      width: 480px;
	    }
</style>
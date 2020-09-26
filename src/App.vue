<template>
	<div id="app1">
		<el-header>
			<div class="menu">
				<el-menu text-color="#fff" background-color="#ADAAE4" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
				  <el-menu-item  index="/">首页</el-menu-item>
				  <el-submenu index="2">
				    <template slot="title">我的工作台</template>
				    <el-menu-item index="2-1">选项1</el-menu-item>
				    <el-menu-item index="2-2">选项2</el-menu-item>
				    <el-menu-item index="2-3">选项3</el-menu-item>
				    <el-submenu index="2-4">
				      <template slot="title">选项4</template>
				      <el-menu-item index="2-4-1">选项1</el-menu-item>
				      <el-menu-item index="2-4-2">选项2</el-menu-item>
				      <el-menu-item index="2-4-3">选项3</el-menu-item>
				    </el-submenu>
				  </el-submenu>
				  <el-menu-item  index="/table" >消息中心
				  
				  </el-menu-item>
				  <el-menu-item index="4">订单管理</el-menu-item>
				  <el-menu-item style="float: right;" index="/login">
					  登陆
				  </el-menu-item>
				</el-menu>
			</div>
			<router-view></router-view>
		</el-header>
		<el-aside>
			
		</el-aside>
		<el-main>
		</el-main>
	</div>
</template>


<script>
	import mainA from './components/main.vue';
	export default{
		components:{
			mainA,
		},
		methods: {
		  handleSelect(key, keyPath) {
		    console.log(key, keyPath);
			this.$router.push({
				path: key,
				params:{data: 'query'}
			})
		  }
		},
	}
</script>

<style>
	html,body,#app1{
	        /*设置内部填充为0，几个布局元素之间没有间距*/
	        padding: 0px;
	         /*外部间距也是如此设置*/
	        margin: 0px;
	        /*统一设置高度为100%*/
	        height: 100%;
	    }
</style>

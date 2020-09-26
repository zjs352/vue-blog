<template>
	<div>
		<el-col class="el-col-box" :span="8" :offset="8">
		    <el-card class="card-box" shadow="never">
				<el-form>
					<el-form-item label="账号" >
					  <el-input placeholder="请输入账号" v-model="acount"></el-input>
					</el-form-item>
					<el-form-item label="密码" >
					  <el-input placeholder="请输入密码" v-model="pass" type="password"  autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item>
					  <el-button @click="submit" type="primary">提交</el-button>
					  <el-button>重置</el-button>
					</el-form-item>
				</el-form>
		    </el-card>
		</el-col>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				pass: '',
				acount: ''
			}
		},
		methods:{
			change: function(e){
				this.$forceUpdate()
			},
			submit: function(){
				this.$message.error('账号或密码错误')
				setTimeout(function(){
					window.location.reload()
				}, 2000)
			}
		}
	}
</script>
	
<style>
	.card-box{
		height: 400px;
	}
	.el-col-box{
		margin-top: 200px;
	}
</style>

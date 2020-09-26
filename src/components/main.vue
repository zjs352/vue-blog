<template>
	<div id="app">
		<div style="width: 45%;float: right;height: auto;margin-top: 20px;">
		<el-carousel :interval="3000" type="card" height="bannerH +'px'">
			<el-carousel-item>
				<el-image v-bind:style="styleObject"  :src="src1">
				</el-image>
			</el-carousel-item>
			<el-carousel-item>
				<el-image v-bind:style="styleObject" :src="src2">
				</el-image>
			</el-carousel-item>
			<el-carousel-item>
				<el-image v-bind:style="styleObject" :src="src">
				</el-image>
			</el-carousel-item>
			<el-carousel-item>
				<el-image v-bind:style="styleObject" :src="src">
				</el-image>
			</el-carousel-item>
			<el-carousel-item>
				<el-image v-bind:style="styleObject" :src="src">
				</el-image>
			</el-carousel-item>
		</el-carousel>
		</div>
		<el-row style="margin-top: 20px;" :gutter="2">
			<el-card style="width: 45%;height:800px" shadow="always">
				
			<div v-for="item in msg">
				<el-col  style="margin-top: 20px;">
					<el-card  shadow="hover">
						{{item.title}}
					</el-card>
				</el-col>
			</div>
			
			</el-card>
		</el-row>
	</div>
</template>

<script>
	export default{
		data() {
		      return {
		        activeIndex: '1',
		        activeIndex2: '1',
				src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
				src1: require('../assets/1.jpg'),
				src2: require('../assets/2.jpg'),
				bannerH: 200,
				styleObject: {
					height: '100%',
					width: 'auto'
				},
				msg: [],
		      };
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
			created() {
				  this.$axios.get("http://127.0.0.1:8000/index_info/").then(
					res =>{
						console.log(res);
						this.msg = res.data.msg;
						console.log(this.msg)
					}
				  ).catch(function(error){
								console.log(error);
							})
				
			}
	}
</script>

<style>
	.el-carousel__item h3 {
	    color: #475669;
	    font-size: 14px;
	    opacity: 0.75;
	    line-height: 200px;
	    margin: 0;
	  }
	  
	  .el-carousel__item:nth-child(2n) {
	    background-color: #99a9bf;
	  }
	  
	  .el-carousel__item:nth-child(2n+1) {
	    background-color: #d3dce6;
	  }
</style>

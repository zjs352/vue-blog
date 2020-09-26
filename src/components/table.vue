<template>
	<div>
		<h3> Element Table </h3>
		<hr />
		<el-row>
			<el-select @change="selectChange" clearable v-model="value" filterable placeholder="请选择">
			    <el-option
			      v-for="item in options"
			      :key="item.value"
			      :label="item.label"
			      :value="item.value">
			    </el-option>
			  </el-select>
		</el-row>
		<div class="table">
			<transition name="el-zoom-in-center" v-show="see">
			<div class="table1" v-show="see">
				<el-table
				    :data="tableData"
				    style="width: 100%">
				    <el-table-column
				      prop="date"
				      label="日期"
				      width="150">
				    </el-table-column>
				    <el-table-column label="配送信息">
				      <el-table-column
				        prop="name"
				        label="姓名"
				        width="120">
				      </el-table-column>
				      <el-table-column label="地址">
				        <el-table-column
				          prop="province"
				          label="省份"
				          width="120">
				        </el-table-column>
				        <el-table-column
				          prop="city"
				          label="市区"
				          width="120">
				        </el-table-column>
				        <el-table-column
				          prop="address"
				          label="地址"
				          width="300">
				        </el-table-column>
				        <el-table-column
				          prop="zip"
				          label="邮编"
				          width="120">
				        </el-table-column>
				      </el-table-column>
				    </el-table-column>
				  </el-table>
			</div>
			</transition>
			<transition name="el-zoom-in-center" v-show="see">
			<div class="table2" v-if="!see" >
				<el-table
				v-loading="loading"
				:row-style="{height: '10px'}"
					   border
				      :data="tableData2"
				      style="width: 100%">
				      <el-table-column
				        prop="date"
				        label="日期"
				        width="180">
				      </el-table-column>
				      <el-table-column
				        prop="name"
				        label="姓名"
				        width="180">
				      </el-table-column>
				      <el-table-column
				        prop="address"
				        label="地址"
						width="80px">
						<template slot-scope="scope">
							<el-tooltip  placement="top">
								<div slot="content">{{scope.row.address}}</div>
								<div style="background-color: aquamarine;">{{scope.row.address}}</div>
							</el-tooltip>
						</template>
				      </el-table-column>
				    </el-table>
					<el-pagination
					      @size-change="handleSizeChange"
					      @current-change="handleCurrentChange"
					      :page-sizes="[1, 2, 3, 4, 5]"
					      :page-size="100"
					      layout="total, sizes, prev, pager, next, jumper"
					      :total="count">
					    </el-pagination>
			</div>
			</transition>
		</div>
	</div>
	
</template>

<script>
	export default {
	    data() {
	      return {
	        tableData: [],
	        tableData2: [],
			options: [{
			          value: '1',
			          label: '表格1'
			        }, {
			          value: '2',
			          label: '表格2'
			        }],
			 value: '',
			 see: true,
			 currnent_page: 1,
			 per_page: 1,
			 count: 0,
			 loading: true
	      }
	    },
		methods:{
			selectChange(val){
				if(val === '2'){
					this.see = false
				}else{
					this.see = true
				}
			},
			getData:function(){
				var url='http://127.0.0.1:8000/table/'
				this.$axios.get(
					url
				).then(val =>{
					var msg = val.data.msg
					var count = val.data.count
					this.count = count
					for(var i in msg){
						this.tableData.push(msg[i])
					}
				})
			},
			handleSizeChange(val) {
				    this.loading = true
			        console.log(`每页 ${val} 条`);
					this.tableData2 = []
					var url = 'http://127.0.0.1:8000/person_show/'
					this.per_page = val
					this.$axios.get(url,{
						params:{
							currnent_page: this.currnent_page,
							per_page: val
						}
					}).then(res =>{
						console.log(res)
						var data = res.data.data
						for(var i in data){
							this.tableData2.push(data[i])
						}
						this.loading = false
					})
			      },
		  handleCurrentChange(val) {
			  this.loading = true
			console.log(`当前页: ${val}`);
			this.currnent_page = val
			this.tableData2 = []
			var url = 'http://127.0.0.1:8000/person_show/'
			this.$axios.get(url,{
				params:{
					currnent_page: val,
					per_page: this.per_page
				}
			}).then(res =>{
				console.log(res)
				var data = res.data.data
				for(var i in data){
					this.tableData2.push(data[i])
				}
				this.loading = false
			})
		  }
		},
		created() {
				this.getData()
				this.handleSizeChange(1)
		}
	}
</script>

<style>
	.table{
		margin-top: 20px;
	}
	.el-pagination{
		margin-top: 20px;
	}
	.cell{max-height: 23px !important;}
</style>

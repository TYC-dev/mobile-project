<template>
	<div class="content">
		<div class="point-list">
			<div class="point-item" 
				v-for="item in colList"
				:key="item.index">
				<div class="point-item-cover">
					<div class="point-episode">第{{item.index}}期</div>
					<div class="point-caption">{{item.colTitle}}</div>
					<div class="point-main">{{item.colDetail}}</div>
				</div>
			</div>
			
		</div>
	</div>

</template>

<script>
	import { get_col } from '../axios/api'

	export default{
		name: 'col',
		data(){
			return{
				colList: []
			}
		},
		mounted(){
			this.fetchData()
		},
		methods:{
			fetchData(){
				var _this = this;
				get_col()
					.then(function(res){
						_this.colList = res.data.colData
					})
					.catch(function(error){
						console.log('shibai'+ error)
					})
			}
		}
	}

</script>
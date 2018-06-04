<template>
	<div id="lanmu">
		<div class="content">
			<div class="lanmu-container">
				<div class="lanmu-list">
					<div class="lanmu-item" 
						v-for="item in lanmuData"
						:key="item.index">
						<div class="lanmu-item-inner">
							<div class="lanmu-avatar">
								<img :src="item.avatar" alt="">
							</div>
							<div class="lanmu-name">
								{{ item.name }}
							</div>
							<div class="lanmu-follow">
								关注
							</div>
						</div>	
					</div>
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { get_lanmu } from '../axios/api'

	export default{
		name: 'lanmu',
		data(){
			return{
				lanmuData:[]
			}
		},
		mounted(){
			this.fetchData()
		},
		methods: {
			fetchData(){
				var _this = this;
				get_lanmu()
					.then(function(res){
						_this.lanmuData = res.data.lanmuData
					})
					.catch(function(error){
						Console.log('加载失败：'+ error)
					})
			}
		}
	}
</script>
<template>
	<div id="lanmu">
		<div class="content">
			<div class="lanmu-container">
				<div class="lanmu-list">
					<div class="lanmu-item" v-for="item in arrData">
						<div class="lanmu-item-inner">
							<div class="lanmu-avatar">
								<img :src="item.avatarUrl" alt="">
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
	export default{
		name: 'lanmu',
		data(){
			return{
				arrData:[]
			}
		},
		mounted(){
			this.fetchData()
		},
		methods: {
			fetchData(){
				var _this = this;
				this.$http.get('./src/data/lanmu.data').then(function(res) {
					_this.arrData = res.data;
					console.log(_this.arrData);
				})
			}
		}
	}
</script>
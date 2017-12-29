<template>
	<div class="content">
		<div class="point-list">
			<div class="point-item" v-for="item in arrlist">
				<div class="point-item-cover">
					<div class="point-episode">第{{item.colEpisode}}期</div>
					<div class="point-caption">{{item.colTitle}}</div>
					<div class="point-main">{{item.colDetail}}</div>
				</div>
			</div>
			
		</div>
	</div>

</template>

<script>
	export default{
		name: 'col',
		data(){
			return{
				arrlist: []
			}
		},
		mounted(){
			this.fetchData()
		},
		methods:{
			fetchData(){
				var _this = this;
				this.$http.get('src/data/col.data').then(function(res) {
					_this.arrlist = res.data;
				}).catch(function(err){
					console.log('专题:',err);
				})
			}
		}
	}

</script>
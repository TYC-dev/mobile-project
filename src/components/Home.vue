<template>
	<div class="content">
		<bannerView></bannerView>
		<div class="content-list">
			
				<div class="content-item" v-for="item in arrList">
					<router-link :to="'./article/'+item.id">
						<h4>{{item.title}}</h4>
						<p>{{item.detail}}</p>
					</router-link>
				</div>
			
			
		</div>
	</div>

</template>

<script>
	import banner from '@/components/Banner'  //引入轮播图的banner

	export default{
		name: 'home',
		data(){
			return{
				arrList: []
			}
		},
		components:{
			'bannerView': banner
		},
		mounted(){
			this.fetchData()
		},
		methods:{
			fetchData(){
				var _this = this
				this.$http.get('src/data/home.data').then(function(res) {
					_this.arrList = res.data;
				})
			}
		}
	}

</script>
<template>
	<div id="Article">
		<div class="article-header">
			<div class="article-header-inner">
				<span class="back" onclick="window.history.go(-1)">返回</span>
			</div>
		</div>
		<div class="article-container">
			<div class="article-pic">
				<img src="../assets/img/fl01.png" alt="">
			</div>
			<div class="article-content">
				<div class="article-author">{{artData.author}}</div>
				<div class="article-title">{{artData.title}}</div>
				<div class="article-detail" v-html="artData.content"></div>
			</div>
		</div>
	</div>
</template>

<script>
	import { get_article } from '../axios/api'

	export default{
		name: 'article',
		mounted(){
			this.fetchData(this.$route.params.id);
			//隐藏导航栏
			console.log(this.$route.path.indexOf('article'))
			if(this.$route.path.indexOf('article') > 0){
				this.$store.dispatch('HIDE_HEAD');
				this.$store.dispatch('HIDE_FOOTER')
			}
		},
		data(){
			return{
				artData: {}
			}
		},
		watch:{
			$route(to){
				var reg=/article\/\d+/;
				if(reg.test(to.path)){
					var articleId=this.$route.params.id || 0;
					this.fetchData(articleId);
				}
			}
		},
		methods:{
			fetchData(id){
				var _this = this
				get_article()
					.then(function(res){
						_this.artData = res.data.articleData[id]
					})
					.catch(function(){
						console.log('shibai: '+ error)
					})
				// console.log(_this.artData)
			}
		}
	}
</script>

<style scoped>
	html,body{
		background-color: #fff !important;
	}
</style>
<template>
	<div class="content">
		<div class="home-top-bg"></div>
		<bannerView></bannerView>
		<div class="billboard-box">
			<div class="hot-point">热点</div>
			<marquee class="marquee-box">
				<marquee-item v-for=" item in boardList" :key="item.id" class="marquee-item-box">{{ item.content }}</marquee-item>
			</marquee>
		</div>
		<div class="content-list">
			<div class="content-item" 
				v-for="( item,index ) in arrList"
				:key="item.index">
				<router-link :to="'./article/'+index">
					<div class="content-item-inner">
						<div class="item-pic" v-if=" index == 0 ">
							<img src="http://www.tuoyucong.top/vue-test/src/assets/img/fl01.png" alt="">
						</div>
						<div class="item-title" v-bind:class="{ 'item-title-with-pic': index == 0}">
							<h4>{{ item.tittle }}</h4>
							<div class="item-source">{{ item.sourceName }}</div>
						</div>
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import { Marquee, MarqueeItem } from 'vux'
	import banner from '@/components/Banner'  //引入轮播图的banner

	import { get_news } from '../axios/api'

	export default{
		name: 'home',
		data(){
			return{
				arrList: [],
				boardList: [{
					id: 1,
					content: '台湾花莲海域发生5.2级地震'
				},{
					id: 2,
					content: '文在寅:驻韩美军与和平协定无关'
				},{
					id: 3,
					content: '歌手称特朗普是兄弟 掉粉900万'
				}]
			}
		},
		created: function(){
			document.getElementsByTagName("body")[0].className="body_white_bg";
		},
		components:{
			'bannerView': banner,
			Marquee,
			MarqueeItem
		},
		mounted(){
			this.fetchData()
		},
		methods:{
			fetchData(){
				var _this = this
				get_news()
					.then(function(res){
						_this.arrList = res.data.newsTittle
					})
					.catch(function(error){
						console.log('shibai'+ error)
					})
			}
		},
		beforeDestroy: function() {
        document.body.removeAttribute("class","body_white_bg");
    }
	}

	</script>

	<style lang='less' scoped>

		.billboard-box{
			display: flex;
			height: 45px;
			background-color: #fff;
			.hot-point{
			width: 70px;
			font-size: 18px;
			line-height: 45px;
			text-align: center;
			color: #df3031
			}
			.marquee-box{
			height: 45px;
			}
			.marquee-item-box{
			height: 45px;
			font-size: 16px;
			line-height: 45px
			}
		}

		.content-item-inner{
			display: flex;
			.item-pic{
				width: 100px;
				height: 80px;
				text-align: center;
				vertical-align: middle;
				overflow: hidden;
				img{
					height: 100%;
					margin: 0 auto;
				}
			}
			.item-title{
				position: relative;
				flex: 1;
				padding-bottom: 18px;
				.item-source{
					position: absolute;
					left: 2px;
					bottom: 0;
					height: 18px;
					width: auto;
					line-height: 18px;
					font-size: 12px;
					color: #a7a7a7;
				}
			}
			.item-title-with-pic{
				padding-left: 20px;
				.item-source{
					left: 22px;
				}
			}
		}
		.content{
			padding: 0 10px;
			margin-top: 5.5rem;
			border-radius: 8px;
		}
		
	</style>
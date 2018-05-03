<template>
	<div class="swiper-container">
		<!-- <div class="swiper-wrapper">
		    <div class="swiper-slide"><img src="../assets/img/fl01.png"></div>
		    <div class="swiper-slide"><img src="../assets/img/fl02.png"></div>
		    <div class="swiper-slide"><img src="../assets/img/fl03.png"></div>
		</div> -->
		<swiper auto :list="swiperPic_List"></swiper>
	</div>
</template>

<script>
	import { Swiper } from 'vux'

	export default{
		name: 'banner',
		data(){
			return{
				swiperPic_List: [{
					url: 'javascript:',
				  img: 'http://www.tuoyucong.top/vue-test/src/assets/img/fl01.png',
				  title: '第一张图片'
				},{
					url: 'javascript:',
				  img: 'http://www.tuoyucong.top/vue-test/src/assets/img/fl02.png',
				  title: '第二张图片'
				},{
					url: 'javascript:',
				  img: 'http://www.tuoyucong.top/vue-test/src/assets/img/fl03.png',
				  title: '第三张图片'
				}]
			}
		},
		components: {
			Swiper
		}
		// ,
		// mounted(){
		// 	this.slider()
		// },
		// methods:{
		// 	slider(){
		// 		var mySwiper = new Swiper ('.swiper-container', {
		// 		    loop: true,
		// 		    autoplay: 2500,
		//   		})
		// 	}
		// }
	}
</script>

<style scoped>
	.vux-slider{
			border-radius: 8px;
		}
</style>
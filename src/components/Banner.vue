<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
		    <div class="swiper-slide"><img src="../assets/img/fl01.png"></div>
		    <div class="swiper-slide"><img src="../assets/img/fl02.png"></div>
		    <div class="swiper-slide"><img src="../assets/img/fl03.png"></div>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'banner',
		mounted(){
			this.slider()
		},
		methods:{
			slider(){
				var mySwiper = new Swiper ('.swiper-container', {
				    loop: true,
				    autoplay: 2500,
		  		})
			}
		}
	}
</script>
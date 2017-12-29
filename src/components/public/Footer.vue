<template>
	<div class="footer">
		<div class="footer-inner">
			<!-- <div class="footer-item active">新闻</div>
			<div class="footer-item">个人中心</div> -->
			<router-link tag="div" to="/home" class="footer-item" active-class="active">新闻</router-link>
			<router-link tag="div" to="/user" class="footer-item" active-class="active">个人中心</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'footer'
	}
</script>
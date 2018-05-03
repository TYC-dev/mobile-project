<template>
	<div class="footer">
		<tabbar>
			<tabbar-item selected link="/home">
				<img slot="icon" src="../../assets/icon/headlines.png">
				<img slot="icon-active" src="../../assets/icon/headlines_fill.png">
				<span slot="label">新闻</span>
			</tabbar-item>
			<tabbar-item link="/col">
				<img slot="icon" src="../../assets/icon/createtask.png" alt="">
				<img slot="icon-active" src="../../assets/icon/createtask_fill.png">
				<span slot="label">专题</span>
			</tabbar-item>
			<tabbar-item link="/lanmu">
				<img slot="icon" src="../../assets/icon/interactive.png" alt="">
				<img slot="icon-active" src="../../assets/icon/interactive_fill.png">
				<span slot="label">栏目</span>
			</tabbar-item>
			<tabbar-item link="/user">
				<img slot="icon" src="../../assets/icon/people.png" alt="">
				<img slot="icon-active" src="../../assets/icon/people_fill.png">
				<span slot="label">我</span>
			</tabbar-item>
		</tabbar>
		<!--<div class="footer-inner">
			<div class="footer-item active">新闻</div>
			<div class="footer-item">个人中心</div> 
			<router-link tag="div" to="/home" class="footer-item" active-class="active">新闻</router-link>
			<router-link tag="div" to="/user" class="footer-item" active-class="active">个人中心</router-link>
		</div> -->
	</div>
</template>

<script>
	import { Tabbar, TabbarItem } from 'vux'

	export default{
		name: 'footer',
		components: {
			Tabbar,
			TabbarItem
		}
	}
</script>


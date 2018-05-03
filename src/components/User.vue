<template>
	<div class="content user-content">
		<blur class="info-bg" :blur-amount="40" :url="'../src/assets/img/q4.jpg'">
			<div class="user-info">
				<div class="avatar">
					<img src="../assets/img/q4.jpg" alt="">
				</div>
				<div class="user-info-content">
					<div class="username">用户名</div>
				</div>
			</div>
		</blur>
		
			
			
		
		<group>
			<cell title="" is-link>
				<span slot="title" style="color:green;"><span style="vertical-align:middle;">好友动态</span> <badge text="1"></badge></span>
			</cell>
			<cell title="我的话题" is-link></cell>
			<cell title="收藏" is-link></cell>
		</group>
		<group>
			<cell title="关于" is-link></cell>
			<cell title="设置" is-link></cell>
		</group>
	</div>

</template>

<script>
	import { Group, Cell, Badge, Blur } from 'vux'

	export default{
		name: 'user',
		components: {
			Group,
			Cell,
			Badge,
			Blur
		}
	}

</script>
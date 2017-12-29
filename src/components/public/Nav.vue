<template>
	<div class="header">
		<!-- <a href="#" class="header-item active">首页</a>
		<a href="#" class="header-item">栏目</a>
		<a href="#" class="header-item">个人</a> -->
		<div class="header-item" v-for="m in menus" >
			<router-link tag="a" :to="setPath(m.path)" active-class="active">{{ m.text }}</router-link>
		</div>
		
	</div>
</template>

<script>
	export default{
		name: 'nav',
		data () {
			return {
				menus: [{
					text: '首页',
					path: '/home'
				},{
					text: '专题',
					path: '/col'
				},{
					text: '栏目',
					path: '/lanmu'
				}]
			}
		},
		methods: {
			setPath(path){
				return path
			}
		}
	}
</script>

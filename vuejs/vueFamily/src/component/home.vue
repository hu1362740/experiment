<template>
	<div id="home">
		<h1>赶快来做题目吧！</h1>
		<a href="#">{{autor}}编写</a>

		<router-link to="/first">点击去下一页</router-link>
	</div>
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				autor:"one love"
			}
		}
	}
</script>

<style type="text/css">
	
</style>
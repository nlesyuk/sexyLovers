<template>
	<h1 class="title">{{ msg }}</h1>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			msg: 'PopupGirls'
		}
	}
}
</script>

<style lang="sass">
@import 'styles/main.sass'

h1.title
	color: red
	font-size: 22px


</style>

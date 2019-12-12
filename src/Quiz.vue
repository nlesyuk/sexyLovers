<template>
<section id="quiz">
	<h2 class="quiz__title">ВЫБЕРИТЕ ЦЕЛЬ ЗНАКОМСТВА:</h2>
</section>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			msg: 'Quiz'
		}
	}
}
</script>

<style lang="sass">
@import 'styles/main.sass'
#quiz
	width: 100%
	padding: 50px 16px 70px
	border-radius: 15px
	background: $grey2
	margin-bottom: 40px
	.quiz__title
		font: bold 2rem/1 $font
		text-align: center
		color: white
		margin-bottom: 60px




</style>

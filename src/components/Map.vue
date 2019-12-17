<template>
<section id="map">
	<h2 class="map__title">Поиск партнера поблизости <br>и знакомство уже <span>через 5 минут</span></h2>
	<div class="map__cont">

	</div>
</section>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			msg: 'Поиск партнера поблизости и знакомство уже через 5 минут'
		}
	}
}
</script>

<style lang="sass">
@import './src/styles/main.sass'

#map
	width: 100%
	.map__title
		font: bold 2rem/1 $font
		text-align: center
		color: white
		margin-bottom: 16px
		span
			color: $accent
	.map__cont
		padding: 50px 16px 70px
		border-radius: 15px
		background: $grey2
		background-image: linear-gradient(45deg, red 0%, blue 100%)
		min-height: 100px
</style>

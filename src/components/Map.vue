<template>
<section id="map">
	<h2 class="map__title">Поиск партнера поблизости <br>и знакомство уже <span>через 5 минут</span></h2>
	<div class="map__cont">
		<img src="../assets/map.png" alt="map">
	</div>
</section>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {}
	}
}
</script>

<style lang="sass">
@import './src/styles/main.sass'

#map
	margin-top: 30px
	width: 100%
	.map__title
		font: bold 2rem/1 $font
		text-align: center
		color: white
		margin-bottom: 16px
		span
			color: $accent
	.map__cont
		border-radius: 15px
		overflow: hidden
		img
			display: block
			max-width: 100%
			width: 100%


@media (max-width: 1200.98px)
	#map
		.map__title
			font: bold 1.5rem/1 $font
@media (max-width: 992.98px)
	#map
		.map__title
			font: bold 1.25rem/1 $font
@media (max-width: 768.98px)
	#map
		.map__title
			font: bold 1.25rem/1 $font
@media (max-width: 576.98px)
	#map
		.map__title
			font: bold 1.125rem/1 $font
</style>

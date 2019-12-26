<template>
<section id="accounts">
	<div class="container">

		<div class="accounts__cont">
			<h2 class="accounts__title">НОВЫЕ АНКЕТЫ</h2>
			<p class="acccount__reg">Всего зарегистрировано: <span>9 071 333</span></p>
		</div>
		<ul class="acccount__list">
			<li>
				<img src="../assets/ava1.jpg" alt="" class="accounts__ava">
				<h3 class="accounts__name">kisska072</h3>
				<h3 class="accounts__age">22, Красноярск</h3>
			</li>
			<li>
				<img src="../assets/ava2.jpg" alt="" class="accounts__ava">
				<h3 class="accounts__name">Таня</h3>
				<h3 class="accounts__age">27, Омск</h3>
			</li>
			<li>
				<img src="../assets/ava3.jpg" alt="" class="accounts__ava">
				<h3 class="accounts__name">Анатолий</h3>
				<h3 class="accounts__age">35, Челябинск</h3>
			</li>
			<li>
				<img src="../assets/ava4.jpg" alt="" class="accounts__ava">
				<h3 class="accounts__name">Алина+Даша</h3>
				<h3 class="accounts__age">31, Красноярск</h3>
			</li>
			<li>
				<img src="../assets/ava5.jpg" alt="" class="accounts__ava">
				<h3 class="accounts__name">Александр</h3>
				<h3 class="accounts__age">23, Москва</h3>
			</li>
			<li>
				<img src="../assets/ava6.jpg" alt="" class="accounts__ava">
				<h3 class="accounts__name">Ксюша</h3>
				<h3 class="accounts__age">27, Омск</h3>
			</li>
			<li>
				<img src="../assets/ava7.jpg" alt="" class="accounts__ava">
				<h3 class="accounts__name">Карина</h3>
				<h3 class="accounts__age">29, Киев</h3>
			</li>
		</ul>

	</div>
</section>
</template>

<script>
export default {
	name: 'Accountsе',
	data () {
		return {
			msg: 'Accounts'
		}
	}
}
</script>

<style lang="sass">
@import './src/styles/main.sass'

#accounts
	width: 100%
	box-sizing: border-box
	background: $grey2
	max-width: 100%
	padding: 40px 0
	.accounts__cont
		display: flex
		justify-content: space-between
		align-items: center
		margin-bottom: 30px
		.accounts__title
			font: bold 1.5rem/1 $font
			text-transform: uppercase
			color: $grey
		.acccount__reg
			font: 600 .87rem/1 $font
			color: $grey
			span
				color: white
	.acccount__list
		display: flex
		justify-content: space-between
		li
			width: calc(100% / 7)
			.accounts__ava
				display: block
				border-radius: 50%
				border: 1px border $grey2
				margin: 0 auto
				margin-bottom: 8px
			.accounts__name
				font: bold 1rem/1 $font
				text-align: center
				color: $grey
				margin-bottom: 4px
			.accounts__age
				font: 500 .87rem/1 $font
				text-align: center
				color: $grey


@media (max-width: 1200.98px)
	#accounts
		.acccount__list
			li
				width: calc(100% / 7)
				.accounts__ava
					width: 60%
@media (max-width: 992.98px)
	#accounts
		.acccount__list
			flex-wrap: wrap
			li
				width: 25%
				margin-bottom: 20px
@media (max-width: 768.98px)
	#map
		.map__title
			font: bold 1.25rem/1 $font
@media (max-width: 576.98px)
	#accounts
		.accounts__cont
			flex-wrap: wrap
			.accounts__title
				margin-bottom: 8px
			.acccount__reg
				width: 100%
		.acccount__list
			flex-wrap: wrap
			li
				width: 50%
				margin-bottom: 20px


</style>

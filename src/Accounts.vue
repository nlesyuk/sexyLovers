<template>
<section id="accounts">
	<div class="container">

		<div class="accounts__cont">
			<h2 class="accounts__title">НОВЫЕ АНКЕТЫ</h2>
			<p class="acccount__reg">Всего зарегистрировано: <span>9 071 333</span></p>
		</div>
		<ul class="acccount__list">
			<li>
				<img src="assets/ava1.jpg" alt="" class="accounts__ava">
				<h3 class="accounts__name">kisska072</h3>
				<h3 class="accounts__age">22, Красноярск</h3>
			</li>
			<li>
				<img src="assets/ava2.jpg" alt="" class="accounts__ava">
				<h3 class="accounts__name">Таня</h3>
				<h3 class="accounts__age">27, Омск</h3>
			</li>
			<li>
				<img src="assets/ava3.jpg" alt="" class="accounts__ava">
				<h3 class="accounts__name">Анатолий</h3>
				<h3 class="accounts__age">35, Челябинск</h3>
			</li>
			<li>
				<img src="assets/ava4.jpg" alt="" class="accounts__ava">
				<h3 class="accounts__name">Алина+Даша</h3>
				<h3 class="accounts__age">31, Красноярск</h3>
			</li>
			<li>
				<img src="assets/ava5.jpg" alt="" class="accounts__ava">
				<h3 class="accounts__name">Александр</h3>
				<h3 class="accounts__age">23, Москва</h3>
			</li>
			<li>
				<img src="assets/ava6.jpg" alt="" class="accounts__ava">
				<h3 class="accounts__name">Ксюша</h3>
				<h3 class="accounts__age">27, Омск</h3>
			</li>
			<li>
				<img src="assets/ava7.jpg" alt="" class="accounts__ava">
				<h3 class="accounts__name">Карина</h3>
				<h3 class="accounts__age">29, Киев</h3>
			</li>

		</ul>

	</div>
</section>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			msg: 'Accounts'
		}
	}
}
</script>

<style lang="sass">
@import 'styles/main.sass'

#accounts
	box-sizing: border-box
	max-width: 100%
	padding: 40px 0
	.accounts__cont
		.accounts__title
			font: 1rem/1 $font
		.acccount__reg
			font: 1rem/1 $font
			color: rgba(255,255,255,.8)
			span
				color: white
	.acccount__list
		display: flex
		justify-content: space-between
		li
			display: flex
			justify-content: flex-start
			align-items: flex-start
			.accounts__ava
				display: block
				margin: 0 auto
				margin-bottom: 8px
			.accounts__name
				font: 1rem/1 $font
			.accounts__age
				font: 1rem/1 $font




</style>

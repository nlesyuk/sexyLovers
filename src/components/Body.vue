<template>
<main :class="{'pb0': isAccountsShown, 'getero': false, 'bi': false}">
    <div class="container">

		<div class="main__18">
			<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="35px"><path fill-rule="evenodd"  opacity="0.502" fill="rgb(131, 122, 100)" d="M25.083,14.133 L24.397,14.133 L24.397,10.941 C24.397,5.037 19.695,0.105 13.819,-0.000 C13.659,-0.003 13.338,-0.003 13.178,-0.000 C7.299,0.105 2.598,5.037 2.598,10.941 L2.598,14.133 L1.913,14.133 C0.857,14.133 -0.003,15.218 -0.003,16.557 L-0.003,32.567 C-0.003,33.905 0.857,35.000 1.913,35.000 L25.083,35.000 C26.136,35.000 26.997,33.905 26.997,32.567 L26.997,16.557 C26.997,15.218 26.136,14.133 25.083,14.133 L25.083,14.133 ZM15.668,24.546 L15.668,29.384 C15.668,29.938 15.203,30.406 14.646,30.406 L12.348,30.406 C11.792,30.406 11.327,29.938 11.327,29.384 L11.327,24.546 C10.787,24.017 10.473,23.285 10.473,22.475 C10.473,20.941 11.663,19.623 13.178,19.562 C13.338,19.555 13.659,19.555 13.819,19.562 C15.333,19.623 16.522,20.941 16.522,22.475 C16.522,23.285 16.208,24.017 15.668,24.546 L15.668,24.546 ZM19.887,14.133 L7.110,14.133 L7.110,10.941 C7.110,7.424 9.976,4.516 13.498,4.516 C17.017,4.516 19.887,7.424 19.887,10.941 L19.887,14.133 Z"/></svg>
			<p class="main__text1">получить контент <br>18+</p>
		</div>

		<div class="main__cont">
			<myEggs></myEggs>
			<myQuiz v-show="true" @stepResult="isAccountsShown = $event"></myQuiz>
			<myMap v-show="false"></myMap>
		</div>

    </div>

	<myAccounts v-show="isAccountsShown"></myAccounts>

</main>
</template>

<script>
import eggs from './Eggs'
import quiz from './Quiz'
import map from './Map'
import accounts from './Accounts'

export default {
	name: 'body',
	data () {
		return {
			msg: 'Body',
			isAccountsShown: false,
		}
	},
	components: {
		myEggs: eggs,
		myQuiz: quiz,
		myMap: map,
		myAccounts: accounts,
	}
}
</script>

<style lang="sass">
@import './src/styles/main.sass'

main
	width: 100%
	box-sizing: border-box
	background-image: url(../assets/body__girl.png)
	background-size: contain
	background-repeat: no-repeat
	background-position: 10% top
	background-color: $black
	min-height: calc(100vh - (44px + 200px))
	position: relative
	padding-bottom: 30px
	&.getero
		background-image: url(../assets/body__gm.png)
		background-size: auto
	&.bi
		background-image: url(../assets/body__gg.png)
		background-size: auto
	&.pb0
		padding-bottom: 0
	.main__cont
		padding-left: 25%
		max-width: 100%
		box-sizing: border-box
	.main__18
		width: 70px
		height: auto
		padding: 12px 8px
		border-radius: 0 6px 6px 0
		background: $grey2
		box-shadow: -10.392px 6px 35px 0px rgba(0, 0, 0, 0.5)
		position: fixed
		left: 0
		top: calc(50% - 56px)
		svg
			display: block
			margin: 0 auto
			max-width: 100%
		.main__text1
			margin-top: 8px
			font: 600 .75rem/1.25 $font
			text-align: center
			color: $brown



@media (max-width: 992.98px)
	main
		padding-bottom: 30px
		background: $black
		.main__cont
			padding-left: 0
		.main__18
			display: none

@media (max-width: 768.98px)
	header
		color: red

@media (max-width: 576.98px)
	header
		color: red







</style>

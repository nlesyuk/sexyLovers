<template>
<div class="body__cont">
	<main :class="{'pb0': isAccountsShown, 'getero': isUserGetero, 'bi': isUserBi}">
		<div class="container">

			<div class="main__18">
				<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="27px" height="35px"><path fill-rule="evenodd"  opacity="0.502" fill="rgb(131, 122, 100)" d="M25.083,14.133 L24.397,14.133 L24.397,10.941 C24.397,5.037 19.695,0.105 13.819,-0.000 C13.659,-0.003 13.338,-0.003 13.178,-0.000 C7.299,0.105 2.598,5.037 2.598,10.941 L2.598,14.133 L1.913,14.133 C0.857,14.133 -0.003,15.218 -0.003,16.557 L-0.003,32.567 C-0.003,33.905 0.857,35.000 1.913,35.000 L25.083,35.000 C26.136,35.000 26.997,33.905 26.997,32.567 L26.997,16.557 C26.997,15.218 26.136,14.133 25.083,14.133 L25.083,14.133 ZM15.668,24.546 L15.668,29.384 C15.668,29.938 15.203,30.406 14.646,30.406 L12.348,30.406 C11.792,30.406 11.327,29.938 11.327,29.384 L11.327,24.546 C10.787,24.017 10.473,23.285 10.473,22.475 C10.473,20.941 11.663,19.623 13.178,19.562 C13.338,19.555 13.659,19.555 13.819,19.562 C15.333,19.623 16.522,20.941 16.522,22.475 C16.522,23.285 16.208,24.017 15.668,24.546 L15.668,24.546 ZM19.887,14.133 L7.110,14.133 L7.110,10.941 C7.110,7.424 9.976,4.516 13.498,4.516 C17.017,4.516 19.887,7.424 19.887,10.941 L19.887,14.133 Z"/></svg>
				<p class="main__text1">получить контент <br>18+</p>
			</div>

			<div class="main__cont">
				<myEggs v-show="!currentWidth"></myEggs>
				<myQuiz
					@stepResult="isAccountsShown = $event"
					@isUserGetero="isUserGetero = $event"
					@isUserBi="isUserBi = $event"
					@hidePopupGirls="hidePopupGirls = $event"
				></myQuiz>
				<myMap v-show="!isAccountsShown"></myMap>
				<myEggs v-show="currentWidth"></myEggs>
			</div>

		</div>
	</main>

	<myAccounts v-show="isAccountsShown"></myAccounts>
</div>
</template>

<script>
import eggs from './Eggs'
import quiz from './Quiz'
import map from './Map'
import accounts from './Accounts'

export default {
	data () {
		return {
			msg: 'Body',
			isAccountsShown: false,
			isUserGetero: false,
			isUserBi: false,
			currentWidth: false,
			hidePopupGirls: null,
		}
	},
	components: {
		myEggs: eggs,
		myQuiz: quiz,
		myMap: map,
		myAccounts: accounts,
	},
	watch: {
		hidePopupGirls: function(value) {
			console.log("BODY hidePopupGirls", value)
			this.$emit("hidePopupGirlsToApp", value)
		}
	},
	mounted(){
		if( window.innerWidth < 768 ) this.currentWidth = true;
	}
}
</script>

<style lang="sass">
@import './src/styles/main.sass'
.fade-enter-active,
.fade-leave-active
	transition: opacity .25s
.fade-enter,
.fade-leave-to
	opacity: 0

.body__cont
	width: 100%
	display: flex
	flex-wrap: wrap
	align-items: flex-start
main
	width: 100%
	box-sizing: border-box
	background-image: url(../assets/body__girl.png)
	background-size: contain
	background-repeat: no-repeat
	background-position: 10% top
	background-color: $black
	// min-height: calc(100vh - (44px + 200px))
	position: relative
	padding-bottom: 30px
	&.getero
		background-image: url(../assets/body__gm2.png)
		// background-image: url(../assets/body__gm-lg.png)
		// background-position: 0% top
		background-position: 15% top
		background-repeat: no-repeat
	&.bi
		background-image: url(../assets/body__gg@2.png)
		// background-position: -5% top
		background-position: 15% top
		background-repeat: no-repeat
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

@media (max-width: 1650.98px)
	main
		background-position: 0% top
@media (max-width: 1500.98px)
	main
		background-position: -10% top

@media (max-width: 1400.98px)
	main
		background-position: -20% top
		&.getero
			background-size: contain
			background-position: -30% top
			background-repeat: no-repeat
		&.bi
			background-size: auto
			background-position: -10% top
			background-repeat: no-repeat

@media (max-width: 1200.98px)
	main
		&.getero
			background-size: contain
			background-position: -20% top
			background-repeat: no-repeat
		&.bi
			background-size: auto
			background-position: -25% top
			background-repeat: no-repeat

@media (max-width: 992.98px)
	main
		background-position: -80% top
		padding-bottom: 30px
		&.getero
			background-size: contain
			background-position: -150% top
			background-repeat: no-repeat
		&.bi
			background-size: auto
			background-position: -55% top
			background-repeat: no-repeat
		.main__cont
			padding-left: 0
		.main__18
			display: none

@media (max-width: 768.98px)
	main
		position: relative
		background-image: none
		z-index: 2
		&:before
			content: ""
			display: block
			width: 100%
			height: 400px
			background: url(../assets/body__girl.png) no-repeat 45% top/contain
			position: absolute
			top: 0
			left: 0
			right: 0
			z-index: -1
		&.getero
			background-size: contain
			background-position: -200px top
			background-repeat: no-repeat
			background-image: none
			&:before
				background: url(../assets/body__gm-lg.png) no-repeat 45% top/contain
		&.bi
			background-size: auto
			background-position: -100px top
			background-repeat: no-repeat
			background-image: none
			&:before
				background: url(../assets/body__gg.png) no-repeat 45% top/contain
		.main__cont
			padding-top: 220px

@media (max-width: 576.98px)
	main
		// &.getero
		// 	background-size: contain
		// 	background-position: -140% top
		// 	background-repeat: no-repeat
		// &.bi
		// 	background-size: contain
		// 	background-position: -45% top
		// 	background-repeat: no-repeat
		&:before
			background: url(../assets/body__girl.png) no-repeat 35% top/contain
		&.getero
			&:before
				background: url(../assets/body__gm-lg.png) no-repeat 35% top/contain
		&.bi
			&:before
				background: url(../assets/body__gg.png) no-repeat 35% top/contain





</style>

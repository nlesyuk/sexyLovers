<template>
	<header>
		<div class="container header__cont">

			<a href="javascript:void(0)" class="logo">
				<img src="../assets/logo.png" alt="logo">
			</a>
			<ul class="header__list">
				<li>Сейчас онлайн:</li>
				<li><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="18px" height="18px"><path fill-rule="evenodd"  fill="rgb(253, 95, 136)" d="M18.004,1.338 C18.004,0.601 17.408,0.003 16.670,0.003 L11.377,-0.000 L11.375,-0.000 C10.636,-0.000 10.042,0.598 10.038,1.335 C10.038,2.072 10.636,2.670 11.375,2.670 L13.444,2.670 L9.712,6.399 C8.702,5.746 7.526,5.393 6.294,5.393 C4.609,5.393 3.022,6.049 1.832,7.239 C-0.632,9.698 -0.632,13.700 1.832,16.159 C3.022,17.349 4.607,18.008 6.294,18.008 C7.980,18.008 9.568,17.352 10.759,16.159 C11.952,14.971 12.612,13.386 12.612,11.701 C12.612,10.468 12.259,9.295 11.604,8.285 L15.333,4.558 L15.333,6.625 C15.333,7.362 15.931,7.960 16.670,7.960 C17.408,7.960 18.007,7.362 18.007,6.625 L18.004,1.338 ZM8.869,14.273 C8.181,14.957 7.268,15.338 6.297,15.338 C5.322,15.338 4.408,14.957 3.720,14.273 C2.302,12.855 2.302,10.546 3.720,9.128 C4.408,8.441 5.322,8.063 6.297,8.063 C7.268,8.063 8.181,8.441 8.869,9.128 C9.557,9.815 9.936,10.727 9.936,11.698 C9.936,12.671 9.557,13.586 8.869,14.273 L8.869,14.273 Z"/></svg>
					<span>{{ girlsCount.toLocaleString('ru-RU') }}</span>
				</li>
				<li><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="13px" height="18px"><path fill-rule="evenodd"  fill="rgb(57, 155, 183)" d="M12.361,6.110 C12.361,2.744 9.663,0.001 6.350,0.001 C3.039,0.001 0.339,2.741 0.339,6.110 C0.339,9.040 2.378,11.494 5.087,12.083 L5.087,13.506 L3.751,13.506 C3.108,13.506 2.585,14.040 2.585,14.694 C2.585,15.349 3.108,15.883 3.751,15.883 L5.087,15.883 L5.087,16.813 C5.087,17.467 5.611,17.998 6.259,17.998 C6.903,17.998 7.428,17.470 7.428,16.813 L7.428,15.883 L8.831,15.883 C9.474,15.883 9.996,15.349 9.996,14.694 C9.996,14.040 9.476,13.506 8.831,13.506 L7.428,13.506 L7.428,12.125 C10.213,11.608 12.361,9.108 12.361,6.110 L12.361,6.110 ZM2.674,6.110 C2.674,4.050 4.322,2.371 6.350,2.371 C8.380,2.371 10.027,4.050 10.027,6.110 C10.027,8.172 8.380,9.850 6.350,9.850 C4.322,9.850 2.674,8.172 2.674,6.110 L2.674,6.110 Z"/></svg>
					<span>{{ mansCount.toLocaleString('ru-RU') }}</span>
				</li>
			</ul>
			<p class="headers__registered">Всего зарегистрировано: <span>{{ regCount.toLocaleString('ru-RU') }}</span></p>

		</div>
	</header>
</template>

<script>
import cookie from '../mixins/cookie';

export default {
	name: 'top-header',
	mixins: [cookie],
	data () {
		return {
			regCount: 9071333,
			girlsCount: 19341,
			mansCount: 23097
		}
	},
	methods: {
		animateCount(variable, from, to, duration, interval) {
			duration = duration * 1000;
			const start = Date.now();
			let id = setInterval( () => {
				let now = Date.now() - start;
				let progress = now / duration;
				let result = Math.floor((to - from) * progress + from);
				if (progress > 1) { clearInterval( id ) }
				let res = (progress < 1 ? result : to).toLocaleString('ru-RU');

				this.$set(this, variable, res)
			}, interval)
		}
	},
	mounted(){
		this.animateCount('regCount', this.regCount, this.regCount+86500, 106500, 1000);
		this.animateCount('girlsCount', this.girlsCount, this.girlsCount+86500, 86500, 800);
		this.animateCount('mansCount', this.mansCount, this.mansCount+86500, 86500*1.25, 800);
		console.log("MOUNTED"); 
	}
}
</script>

<style lang="sass">
@import './src/styles/main.sass'

header
	width: 100%
	padding: 0
	background: $black
	box-shadow: 0px 3px 14px 0px rgba(0, 0, 0, 0.35)
	position: relative
	z-index: 2
	.header__cont
		display: flex
		justify-content: space-between
		align-items: center
		color: white
	.logo
		display: block
		cursor: default
		img
			display: block
	.header__list
		display: flex
		justify-content: flex-start
		align-items: center
		li 
			margin-right: 8px
			font: 600 .87rem/1 $font
			color: $grey
			&:nth-child(1)
				margin-right: 14px
			svg
				margin-right: 9px
			span
				display: inline-block
				min-width: 50px
				// background: red
				color: white
				position: relative
				top: -3px
	.headers__registered
		font: 600 .87rem/1 $font
		color: $grey
		span
			display: inline-block
			min-width: 70px
			// background: red
			color: white






@media (max-width: 992.98px)
	header
		.logo
			width: 50%
			margin-bottom: 0px
			img
				margin: 0 auto
		.header__list
			width: 50%
			justify-content: center
			margin-bottom: 0px
			li 
				margin-right: 8px
				svg
					margin-right: 6px
				span
					position: relative
					top: -3px
		.headers__registered
			display: none

@media (max-width: 768.98px)
	// header
	// 	.logo
	// 		color: red
	// 		img
	// 			margin: 0 auto
	// 	.header__list
	// 		justify-content: center
	// 		li 
	// 			margin-right: 8px
	// 			font: 600 .75rem/1 $font
	// 			svg
	// 				margin-right: 1px
	// 			span
	// 				top: -4px
	header
		.header__cont
			align-items: stretch
			align-content: stretch
		.logo
			width: 55%
			color: red
			img
				max-width: 100%
				margin: 0 auto
		.header__list
			justify-content: flex-end
			position: relative
			li 
				margin-right: 8px
				font: 600 .75rem/1 $font
				&:nth-child(1)
					margin-right: 88px
				&:nth-child(2),
				&:nth-child(3)
					position: absolute
					right: 0
				&:nth-child(2)
					top: 0
				&:nth-child(3)
					bottom: 0
				svg
					margin-right: 1px
					transform: scale(.75)
				span
					top: -4px



@media (max-width: 576.98px)
	header
		.header__cont
			align-items: stretch
			align-content: stretch
		.logo
			width: 55%
			color: red
			img
				max-width: 100%
				margin: 0 auto
		.header__list
			justify-content: flex-end
			position: relative
			li 
				margin-right: 8px
				font: 600 .75rem/1 $font
				&:nth-child(1)
					margin-right: 75px
				&:nth-child(2),
				&:nth-child(3)
					position: absolute
					right: 0
				&:nth-child(2)
					top: 0
				&:nth-child(3)
					bottom: 0
				svg
					margin-right: 1px
					transform: scale(.75)
				span
					top: -4px










</style>

<template>
	<div id="app">

		<myHeader></myHeader>
		<myBody></myBody>
		<myFooter></myFooter>

		<myPopupGirls 
			@update="showControl = $event" 
			v-show="showControl"
		></myPopupGirls>

	</div>
</template>

<script>
import header from './components/Header'
import body from './components/Body'
import footer from './components/Footer'
import PopupGirls from './components/PopupGirls'

export default {
	name: 'app',
	data(){
		return {
			showControl: true
		}
	},
	components: {
		myHeader: header,
		myBody: body,
		myFooter: footer,
		myPopupGirls: PopupGirls
	}
}
</script>

<style lang="sass">
@import './src/styles/main.sass'
#app
	min-height: 100vh
	height: auto
	background: black

	
.component-fade-enter-active, 
.component-fade-leave-active
	transition: opacity .3s ease
.component-fade-enter, 
.component-fade-leave-to
	opacity: 0


</style>

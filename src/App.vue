<template>
<div>

	<myHeader></myHeader>
	<myBody></myBody>
	<myAccounts></myAccounts>
	<myFooter></myFooter>
	<myPopupGirls></myPopupGirls>

</div>
</template>

<script>
import header from './components/Header'
import body from './components/Body'
import footer from './components/Footer'
import PopupGirls from './components/PopupGirls'
import accounts from './components/Accounts'

export default {
	name: 'app',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	components: {
		myHeader: header,
		myBody: body,
		myFooter: footer,
		myPopupGirls: PopupGirls,
		myAccounts: accounts
	}
}
</script>

<style lang="sass">
@import 'styles/main.sass'

h1.title
	color: red
	font-size: 22px
	font: 1.25rem/1 $font
</style>
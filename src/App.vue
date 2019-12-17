<template>
<div>

	<myHeader></myHeader>
	<myBody></myBody>
	<myAccounts v-if="false"></myAccounts>
	<myFooter  v-if="true"></myFooter>
	<myPopupGirls  v-if="false"></myPopupGirls>

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
		return {}
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
</style>
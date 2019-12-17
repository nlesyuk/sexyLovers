<template>
<footer>
    <div class="container">
		<p class="footer__text1">© 2019 Все права защищены. Все материалы на сайте предоставлены только для ознакомления. Администрация ресурса не несет ответственности за информацию, предоставленную из сторонних источников.</p>
		<ul class="footer__list">
			<li>Получить Контент</li>
			<li>Управление подпиской на контент</li>
			<li>Правила предоставления</li>
			<li>Подписки на контент</li>
			<li>Обратная связь</li>
			<li>Пожаловаться на спам (AntiSpam)</li>
		</ul>
		<p class="footer__text2">Подписка и пробный период не предоставляется абонентам Tele2 и других операторов, если не указано иное. <br><br>Для абонентов остальных операторов России: чтобы получить доступ к сайту, необходимо отправить ответное СМС сообщение на один из номеров: 9395, 8385, 6666, 6365, 7375, 8910. Для получения услуги необходимо 1 СМС. Стоимость отправки СМС: Номер 9395 - 354 руб с НДС, Номер 8404 - 186,26 руб с НДС, Номер 8385 - 186,26 руб с НДС, Номер 6666 - 44 руб с НДС, Номер 6365 - 75 руб с НДС, Номер 7375 - 35 руб с НДС, Номер 8910 - 100 руб с НДС</p>
    </div>
</footer>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			msg: 'Footer'
		}
	}
}
</script>

<style lang="sass">
@import './src/styles/main.sass'

footer
	padding: 15px 0 !important
	background: black
	color: rgba(255,255,255,.20)
	.footer__text1
		font: 300 .75rem/1.25 $font
		text-align: center
		margin-bottom: 8px
	.footer__list
		font: 300 .75rem/1.25 $font
		text-align: center
		display: flex
		justify-content: space-around
		margin-bottom: 10px
		li 
			color: inherit
	.footer__text2
		font: 300 .75rem/1.25 $font
		text-align: center


</style>

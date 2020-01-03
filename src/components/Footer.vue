<template>
<footer>
    <div class="container">
		<p class="footer__text1">© 2019 Все права защищены. Все материалы на сайте предоставлены только для ознакомления. Администрация ресурса не несет ответственности за информацию, предоставленную из сторонних источников.</p>
		<ul class="footer__list">
			<li><a href="/intimsearch4/?page=join&action=activate">Получить Контент</a></li>
			<li><a href="/?page=control">Управление подпиской на контент</a></li>
			<li><a href="/portal/rules.php">Правила предоставления Подписки на контент</a></li>
			<li><a href="/?page=mail">Обратная связь</a></li>
			<li><a href="/?page=mail">Пожаловаться на спам (AntiSpam)</a></li>
		</ul>
		<p class="footer__text2">Подписка и пробный период не предоставляется абонентам Tele2 и других операторов, если не указано иное. <br><br>Для абонентов остальных операторов России: чтобы получить доступ к сайту, необходимо отправить ответное СМС сообщение на один из номеров: 9395, 8385, 6666, 6365, 7375, 8910. Для получения услуги необходимо 1 СМС. Стоимость отправки СМС: Номер 9395 - 354 руб с НДС, Номер 8404 - 186,26 руб с НДС, Номер 8385 - 186,26 руб с НДС, Номер 6666 - 44 руб с НДС, Номер 6365 - 75 руб с НДС, Номер 7375 - 35 руб с НДС, Номер 8910 - 100 руб с НДС</p>
    </div>
</footer>
</template>

<script>
export default {
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
	width: 100%
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
			a
				color: inherit
			&:hover
				a
					color: white
	.footer__text2
		font: 300 .75rem/1.25 $font
		text-align: center


@media (max-width: 992.98px)
	footer
		padding: 15px 0 !important
		.footer__text1
			font: 300 .75rem/1.25 $font
			text-align: center
			margin-bottom: 8px
		.footer__list
			flex-wrap: wrap
			margin-bottom: 10px
			li 
				display: block
				width: 100%
				color: inherit
		.footer__text2
			font: 300 .75rem/1.25 $font
			text-align: center


@media (max-width: 768.98px)
	.eggs
		padding: 10px 0


@media (max-width: 576.98px)
	header
		padding-bottom: 18px

</style>

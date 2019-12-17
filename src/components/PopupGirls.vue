<template>
<div>

	<ul class="popup__list">
		<li>
			<div class="popup__top">
				<img src="../assets/popup_1.jpg" alt="">
				<h3>Оля, <span>26</span></h3>
			</div>
			<p class="popup__text">Срочно ищу мужика на вечер!!! <br>Муж уехал</p>
			<a href="#" class="popup__link">Начать общение</a>
		</li>
		<li>
			<div class="popup__top">
				<img src="../assets/popup_2.jpg" alt="">
				<h3>Мята, <span>27</span></h3>
			</div>
			<p class="popup__text">Проведу приятный вечер, а может и ночь с незнакомцем.</p>
			<a href="#" class="popup__link">Начать общение</a>
		</li>
		<li>
			<div class="popup__top">
				<img src="../assets/popup_3.jpg" alt="">
				<h3>Вера, <span>41</span></h3>
			</div>
			<p class="popup__text">Отдыхаем с подругами. Кто составит компанию?</p>
			<a href="#" class="popup__link">Начать общение</a>
		</li>
		<li>
			<div class="popup__top">
				<img src="../assets/popup_4.jpg" alt="">
				<h3>Альбина, <span>24</span></h3>
			</div>
			<p class="popup__text">Мечтаю попробовать секс втроем!!!</p>
			<a href="#" class="popup__link">Начать общение</a>
		</li>
		<li>
			<div class="popup__top">
				<img src="../assets/popup_4.jpg" alt="">
				<h3>Вика, <span>28</span></h3>
			</div>
			<p class="popup__text">Хочу взрослого мужчину без комплексов!</p>
			<a href="#" class="popup__link">Начать общение</a>
		</li>
	</ul>
	
</div>
</template>

<script>
export default {
	name: 'app',
	data () {
		return {
			msg: 'PopupGirls'
		}
	}
}
</script>

<style lang="sass">
@import '../styles/main.sass'

.popup__list
	position: fixed 
	right: 50px
	bottom: 50px
	cursor: default
	li:first-child
		display: block
	li
		display: none
		width: 150px
		box-sizing: border-box
		padding: 8px
		border-radius: 5px
		box-shadow: 0px 0px 12.48px 0.52px rgba(0, 0, 0, 0.5)
		background-image: linear-gradient( 45deg, rgb(50,50,50) 0%, rgb(63,63,63) 48%, rgb(28,28,28) 99%)
		.popup__top
			display: flex
			justify-content: flex-start
			align-items: center
			margin-bottom: 8px
			img
				display: block
				max-width: 100%
				border-radius: 8px
				margin-right: 8px
			h3
				font: bold .87rem/1.25 $font
				color: white
				span
					display: block
		.popup__text
			font: .75rem/1.125 $font
			color: white
			margin-bottom: 8px
		.popup__link
			display: block
			background: $grey2
			padding: 8px
			border-radius: 4px
			font: bold .75rem/1 $font
			text-decoration: none
			text-align: center
			color: white
			&:hover
				background: black
				cursor: pointer
	color: red
	font-size: 22px

</style>

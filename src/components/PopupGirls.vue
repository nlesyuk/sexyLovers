<template>
<div>
	<ul class="popup__list" >
		<transition
			name="custom-classes-transition"
			enter-active-class="animated fadeInUp"
			leave-active-class="animated fadeOutDown"
			mode="out-in"
		>
			<li v-if="show['1']">
				<div class="popup__top">
					<img src="../assets/ava1.jpg" alt="">
					<h3>Оля, <span>26</span></h3>
				</div>
				<p class="popup__text">Срочно ищу мужика на вечер!!! <br>Муж уехал</p>
				<a href="#quiz" class="popup__link" @click.prevent="scrollTo($event)">Начать общение</a>
			</li>
			<li v-if="show['2']">
				<div class="popup__top">
					<img src="../assets/ava2.jpg" alt="">
					<h3>Мята, <span>27</span></h3>
				</div>
				<p class="popup__text">Проведу приятный вечер, а может и ночь с незнакомцем.</p>
				<a href="#quiz" class="popup__link" @click.prevent="scrollTo($event)">Начать общение</a>
			</li>
			<li v-if="show['3']">
				<div class="popup__top">
					<img src="../assets/ava6.jpg" alt="">
					<h3>Вера, <span>31</span></h3>
				</div>
				<p class="popup__text">Отдыхаем с подругами. Кто составит компанию?</p>
				<a href="#quiz" class="popup__link" @click.prevent="scrollTo($event)">Начать общение</a>
			</li>
			<li v-if="show['4']">
				<div class="popup__top">
					<img src="../assets/ava7.jpg" alt="">
					<h3>Альбина, <span>24</span></h3>
				</div>
				<p class="popup__text">Мечтаю попробовать секс втроем!!!</p>
				<a href="#quiz" class="popup__link" @click.prevent="scrollTo($event)">Начать общение</a>
			</li>
			<li v-if="show['5']">
				<div class="popup__top">
					<img src="../assets/ava4.jpg" alt="">
					<h3>Вика, <span>28</span></h3>
				</div>
				<p class="popup__text">Хочу взрослого мужчину без комплексов!</p>
				<a href="#quiz" class="popup__link" @click.prevent="scrollTo($event)">Начать общение</a>
			</li>
		</transition>
	</ul>

</div>
</template>

<script>
export default {
	props: ['hidePopupGirlsToApp'],
	data () {
		return {
			msg: 'PopupGirls',
			show: {
				'1': false,
				'2': false,
				'3': false,
				'4': false,
				'5': false,
			},
			currentItem: '0'
		}
	},
	methods: {
		showGirls(showAfterSec, hideAfterSec) {
			return new Promise((resolve, reject) => {

				if( !this.hidePopupGirlsToApp ){
					setTimeout( () => {
						// hide all
						for (let item in this.show) this.show[item] = false;

						// check
						this.currentItem = +this.currentItem + 1;
						if( +this.currentItem > 5) this.currentItem = 1

						// show
						let strIndex = this.currentItem.toString();
						this.show[strIndex] = true;

						// console.log(+strIndex, '1-timeout');
						resolve(strIndex);

					}, showAfterSec * 1000);
				} else {
					for (let item in this.show) this.show[item] = false;
					reject()
				}

			}).then( (index) => {
				return new Promise((resolve, reject) => {

					setTimeout(() => {
						this.show[index] = false;
						// console.log(+index, '2-timeout');
						resolve(index);
					}, hideAfterSec * 1000)

				});
			}).then( (index) => {

				// stop show girls popup
				if( !this.hidePopupGirlsToApp ){
					this.showGirls(5, 7);
				}
				// console.log(+index, '3-timeout');

			}).catch(err => console.log(err))

		},
		scrollTo($event) {
			let hash = $event.toElement.hash;
			document.querySelector(hash).scrollIntoView({ behavior: 'smooth', block: 'end'});
		}
	},
	watch: {
		// start show girls popup
		hidePopupGirlsToApp: function(value) {
			console.log("WATCH hidePopupGirlsToApp", value)
			if(value){
				this.showGirls(5, 7);
			}
		}
	},
	mounted() {
		// show girls popup
		this.showGirls(5, 7)
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
	z-index: 9999
	li:first-child
		display: block
	li
		display: block
		width: 250px
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
				width: 30%
				max-width: 100%
				border-radius: 50%
				border: 2px solid $accent
				margin-right: 8px
			h3
				font: bold .87rem/1.25 $font
				font: bold 1.125rem/1.25 $font
				color: white
				color: $accent
				span
					display: block
		.popup__text
			font: .75rem/1.125 $font
			font: .9rem/1.125 $font
			color: white
			margin-bottom: 8px
		.popup__link
			display: none
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



@media (max-width: 1200.98px)
	.popup__list
		position: fixed 
		right: 10px
		bottom: 10px

@media (max-width: 992.98px)
	.popup__list
		position: fixed 
@media (max-width: 768.98px)
	.popup__list
		position: fixed 
		li
			width: 200px
			.popup__top
				img
					display: block
					width: 50%
					max-width: 100%
					// border-radius: 22px
				h3
					font: bold 1rem/1.25 $font
			.popup__text
				font: 1rem/1.125 $font
@media (max-width: 576.98px)
	.popup__list
		position: fixed

</style>

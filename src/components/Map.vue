<template>
<section id="map">
	<h2 class="map__title">Поиск партнера поблизости <br>и знакомство уже <span>через 5 минут</span></h2>
	<button @click="addMarker">1</button>
	<div class="map__cont">
		<ul class="map__pointers">

			<transition-group name="nz" mode="out-in" tag="ul">
				<li v-for="(index, num) of items" :key="num" :style="{'top': Math.floor(Math.random()*Math.floor(250))+'px', 'left': Math.floor(Math.random()*Math.floor(650))+'px'}">
					<img src="../assets/pointer.png">
					{{num}}
				</li>
			</transition-group>

			<!-- <li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>

			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>

			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>

			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li>
			<li><img src="../assets/pointer.png"></li> -->
		</ul>
	</div>
</section>
</template>

<script>
export default {
	data () {
		return {
			items: [1]
		}
	},
	methods: {
		showMarkers(value) {
			const vm = this;
			new Promise((resolve, reject) => {
				setTimeout(()=>{
					this.items.push( Date.now() );
					console.log("promise");
					resolve(1);
				}, 300)
			}).then(result => {
				if( this.items.length < 10 ) {
					this.showMarkers();
				}
			})
		},
		addMarker(){
			// this.items.push( Date.now() );
			this.set( this.items, Date.now() );
		}
	},
	mounted() {
		this.showMarkers(1);
	}
}
</script>

<style lang="sass">
@import './src/styles/main.sass'

.nz-enter,
.nz-leave-to,
.nz-enter-active,
.nz-leave-active
	position: relative
	transition: all .5s

.nz-enter-active,
.nz-leave-active
	transition: all .25s

.nz-enter,
.nz-enter-to
	top: 15px
	transition: all .25s
.nz-leave,
.nz-leave-to
	top: 0px
	transition: all .25s


#map
	margin-top: 30px
	width: 100%
	.map__title
		font: bold 2rem/1 $font
		text-align: center
		color: white
		margin-bottom: 16px
		span
			color: $accent
	.map__cont
		border-radius: 15px
		background: url(../assets/map-clear.png) no-repeat center center/cover
		min-height: 250px
		overflow: hidden
		position: relative
		.map__pointers
			z-index: 3
			position: absolute
			top: 0
			left: 0
			right: 0
			bottom: 0
			li
				position: absolute
				top: 50%
				left: 50%
				img
					position: relative
					animation: 1s cubic-bezier(0, 1.01, 0, 1.24) 1s infinite forwards running fastLine2
				&:nth-child(odd)
					img
						filter: hue-rotate(90deg)
				&:nth-child(1)
					top: 28%
					left: 12%
				&:nth-child(2)
					top: 35%
					left: 5%
				&:nth-child(3)
					top: 43%
					left: 21%
				&:nth-child(4)
					top: 7%
					left: 35%
				&:nth-child(5)
					top: 20%
					left: 55%
				&:nth-child(6)
					top: 30%
					left: 65%
				&:nth-child(7)
					top: 50%
					left: 80%
				&:nth-child(8)
					top: 60%
					left: 75%
				&:nth-child(9)
					top: 78%
					left: 25%
				&:nth-child(10)
					top: 72%
					left: 12%
				&:nth-child(12)
					top: 35%
					left: 5%
				&:nth-child(13)
					top: 22%
					left: 28%
				&:nth-child(14)
					top: 81%
					left: 54%
				&:nth-child(15)
					top: 67%
					left: 34%
				&:nth-child(16)
					top: 44%
					left: 89%
				&:nth-child(17)
					top: 24%
					left: 81%
				&:nth-child(18)
					top: 53%
					left: 59%
				&:nth-child(19)
					top: 36%
					left: 71%
				&:nth-child(20)
					top: 65%
					left: 89%




// @keyframes fastLine2
// 	0%
// 		top: -5px 
// 		transform: scale(1.25)
// 	50%
// 		top: 0
// 		transform: scale(1)
// 	100%
// 		top: -5px
// 		transform: scale(1.25)


@media (max-width: 1200.98px)
	#map
		.map__title
			font: bold 1.5rem/1 $font

@media (max-width: 992.98px)
	#map
		.map__title
			font: bold 1.25rem/1 $font

@media (max-width: 768.98px)
	#map
		.map__title
			font: bold 1.25rem/1 $font

@media (max-width: 576.98px)
	#map
		.map__title
			font: bold 1.125rem/1 $font

</style>

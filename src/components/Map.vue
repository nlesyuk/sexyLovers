<template>
<section id="map">
	<h2 class="map__title">Поиск партнера поблизости <br>и знакомство уже <span>через 5 минут</span></h2>
	<!-- <button @click="addMarker">button ADD</button> -->
	<div class="map__cont">
		<div id="mapBoxContainer"></div>

		<ul class="map__pointers">
			<transition-group name="nz" mode="out-in" tag="ul">
				<li 
					v-for="(item, index) in items" :key="item.num + Math.random()"
					class="list-item" 
					:style="{'top': item.top, 'left': item.left}"
				>
					<img :src="require(`../assets/marker_${index+1}.png`)">
				</li>
			</transition-group>
		</ul>

	</div>
</section>
</template>

<script>
import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoibmEzYXIxeSIsImEiOiJjanloM29tenQwNzRtM2hwYWw4emUyaXhlIn0.PuWkJSZ5w1Ijq-surIhTsw';
// mapboxgl.accessToken = '09..pk.eyJ1IjoibmEzYXIxeSIsImEiOiJjanloM29tenQwNzRtM2hwYWw4emUyaXhlIn0.PuWkJSZ5w1Ijq-surIhTsw';

import mapImg from '@/components/MapImg'

export default {
	data () {
		return {
			data: {
				service1Url: "http://api.sypexgeo.net/Fzyxh/json/",
				service2Url: "http://api.sypexgeo.net/Fzyxh/json/",
				userIP: '',
				lat: '',
				lon: '',
			},
			items: [],
		}
	},
	components: {
		myImg: mapImg
	},
	watch: {
		'data.lat': (newValue) => {
			console.log(newValue);
		},
		data: (newValue) => {
			console.log("data: ",newValue);
		}
	},
	methods: {
		showMarkers() {
			new Promise((resolve, reject) => {
				setTimeout(()=>{
					this.items.push( {
						top: Math.floor(10 + Math.random() * (90 - 30)) + "%",
						left: Math.floor(10 + Math.random() * (90 - 10)) + "%",
						num: Date.now() 
					});
					resolve();
				}, 500);
			}).then( () => {
				if( this.items.length <= 10 ) {
					this.showMarkers();
				} else {

				}
			});
		},
		initialMap(arrLocations){
			// console.log(arrLocations);
			var location = ( arrLocations != undefined ) ? arrLocations : [37.707313, 55.734053] ; // Kyiv by default

			new mapboxgl.Map({
				container: 'mapBoxContainer',
				style: 'mapbox://styles/na3ar1y/cjyq06c1y1my31cpit9snzpsi',
				center: location,
				zoom: 10
			});
		},
		// 
		addMarker(){
			this.items.push( Date.now() );
		},
		setItemsInLocalStorage(){
			fetch(url, {
				method: method,
				// body: JSON.stringify(body),
			}).then(response => {
				if(response.ok) {
					// if(response.status < 400)
					return response.json();
				}

				return response.json().then(error => {
					const e = new Error('Что то пошло не так')
					e.data = error 
					throw e
				})
			});
		},

		getIP() {
			// const url = window.location.href + '/server/'; 
			const url = 'http://pronazvo.beget.tech/markline/'; // test 
			return fetch(url);
		},
		getGeoOfUser(ip){
			/* 
			https://sypexgeo.net/ru/pc/auth/
			https://ip-location.icu/pricing
			https://ipinfodb.com/register
			 */
			const url = this.data.service1Url + ip;
			fetch(url, {
				method: "GET",
			}).then(response => {
				if(response.ok) {
					return response.json(); 
				}
			}).then(result => {
				// RESULT
				console.log("getGeoOfUser", result);
				// + save  lat lon
				this.data.lat = result.region.lat;
				this.data.lon = result.region.lon;
				// + set data in LocalStorage
				localStorage.setItem('map', JSON.stringify(this.data));
			}).then(error => {
				new Error('Что то пошло не так: ', error)
			})

		},
	},
	beforeCreate() {
		console.log("beforeCreate");
	},
	mounted() {
		this.initialMap();
		// this.showMarkers();

		// 0 check LocalStorage
		const fingerPrint = localStorage.getItem('map');
		console.log(typeof fingerPrint, fingerPrint, !!fingerPrint)
		let obj = !!fingerPrint ? JSON.parse(fingerPrint) : false;
		// console.log(obj);
		if( obj && obj.userIP && obj.lat && obj.lon ) {
			// console.log(obj.userIP, obj.lat, obj.lon);
			this.initialMap([obj.lon, obj.lat]);
		} else {
			// 1 get IP
			this.getIP().then( response => {
				return response.json();
			}).then( res => {
				console.log("getIP", res.ip);
				// RESULT
				if(res.ip) {
					// + save IP
					this.data.userIP = res.ip;
					// 2 send IP to the location server
					// this.getGeoOfUser(res.ip);
				}
			}).catch((error) => {
				console.error('Error:', error);
			});
		}

// TODO
// якщо сервіс вичерпав заявки то підставляти статичну карту мск
// 

	}
}
</script>

<style lang="sass">
@import './src/styles/main.sass'


.nz-enter-active, .nz-leave-active
	transition: all .5s
.nz-enter, .nz-leave-to
	opacity: 0
.nz-enter-to, .nz-leave
	opacity: 1


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
		// background: url(../assets/map-clear.png) no-repeat center center/cover
		background: #999
		min-height: 250px
		height: 250px
		overflow: hidden
		position: relative
		#mapBoxContainer
			width: 100%
			height: 280px
			background: red
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
						// filter: hue-rotate(90deg)
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

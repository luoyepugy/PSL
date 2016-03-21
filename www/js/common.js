
$(function() {

	// 地图
	var cities = new L.LayerGroup();

	L.marker([22.62,114.07]).bindPopup('这里是深圳.').addTo(cities);

	var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';

    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: ''});
	    streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: ''});

	var map = L.map('map', {
		center: [22.62,114.07],
		zoom: 7,
		layers: [grayscale, cities],
		scrollWheelZoom: false
	});

});

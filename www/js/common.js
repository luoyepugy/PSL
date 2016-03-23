
$(function() {

	// 地图
	var cities = new L.LayerGroup();

	L.marker([22.475433, 113.165915]).bindPopup('地址：广东省佛山市顺德区大良嘉信城市广场一期东区三楼（万宁超市楼上）</br>电话：0757-22918598').addTo(cities);

	var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';

    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox.light', attribution: ''});
	    streets  = L.tileLayer(mbUrl, {id: 'mapbox.streets',   attribution: ''});

	var map = L.map('map', {
		center: [22.475433, 113.165915],
		zoom: 7,
		layers: [grayscale, cities],
		scrollWheelZoom: false
	});

});

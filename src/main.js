'use strict';
(function() {
	// global variables

	var wWidth= window.innerWidth;


	// called once on page load
	var init = function() {

	};

	// called automatically on article page resize
	window.onResize = function(width) {

	};

	// called when the graphic enters the viewport
	window.enterView = function() {

	};


	// graphic code


	var myMap = L.map('map');
	myMap.setView([42.369996217418645,-71.1279897508789], 16);
	myMap.scrollWheelZoom.disable();

	var mapTiles = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, Tiles courtesy of <a href="http://hot.openstreetmap.org/" target="_blank">Humanitarian OpenStreetMap Team</a>',
		minZoom: 16,
		maxZoom: 18

	});

	mapTiles.addTo(myMap);

	//Entrance Markers
	var entranceIcon = L.Icon.extend({

	    options: {


	        iconSize:     [50,30],

	        iconAnchor:   [25,30],

	        popupAnchor:  [-3, -76]
	    }

	});

	var entranceIcon1 = new entranceIcon({iconUrl: 'assets/entrance.svg'}),
		entranceIcon2 = new entranceIcon({iconUrl: 'assets/entrance.svg'});



	L.icon = function (options) {
		return new L.Icon(options);
	}

	L.marker([42.36871219483201, -71.12722861012037], {icon: entranceIcon1}).addTo(myMap);
	L.marker([42.369440574624996, -71.1267798085496], {icon: entranceIcon2}).addTo(myMap);

	//Stage and Arena markers
	var stageIcon = L.Icon.extend({

	    options: {


	        iconSize:     [40,40],

	        iconAnchor:   [20,40],

	        popupAnchor:  [-3, -76]
	    }

	});

	var arena = new stageIcon({iconUrl: 'assets/arena.svg'}),
		blueStage = new stageIcon({iconUrl: 'assets/blueStage.svg'}),
		redStage = new stageIcon({iconUrl: 'assets/redStage.svg'}),
		greenStage = new stageIcon({iconUrl: 'assets/greenStage.svg',iconSize:[60,55], iconAnchor:[30,58]});



	L.icon = function (options) {
		return new L.Icon(options);
	}

	L.marker([42.36822941083406, -71.12723707902774], {icon: arena}).addTo(myMap);
	L.marker([42.36736425667485, -71.12979268514488], {icon: blueStage}).addTo(myMap);
	L.marker([42.37195127514723, -71.12907170095536], {icon: redStage}).addTo(myMap);
	L.marker([42.3719661498801, -71.12818121660098], {icon: greenStage}).addTo(myMap);

	//Other markers
	var otherIcon = L.Icon.extend({

	    options: {

			// shadowUrl: 'icon-shadow.png',
	        iconSize:     [28,32],
			//shadowSize:   [62, 18],
	        iconAnchor:   [14,32],
			//shadowAnchor: [20, 62],
	        popupAnchor:  [-3, -76]
	    }

	});

	var rando = Math.floor(Math.random() * 1000000);

	var beverage1 = new otherIcon({iconUrl: 'assets/beverage.png'}),


		food1 = new otherIcon({iconUrl: 'assets/food.png'}),


		comfort1 = new otherIcon({iconUrl: 'assets/comfort.png'}),

		sponsor1 = new otherIcon({iconUrl: 'assets/sponsor.png'}),


		restroom1 = new otherIcon({iconUrl: 'assets/restrooms.png'}),

		vip1 = new otherIcon({iconUrl: 'assets/vip.png'}),


	 	plantinum = new otherIcon({iconUrl: 'assets/plantinum.png', iconSize:[46,60], iconAnchor: [23,60]});





	L.icon = function (options) {
		return new L.Icon(options);
	}

	//Beverages
	L.marker([42.37107937533403, -71.12883567560061], {icon: beverage1}).addTo(myMap)+rando;
	L.marker([42.37057604584075, -71.12838506448611], {icon: beverage1}).addTo(myMap)+rando;
	L.marker([42.37154306901494, -71.12750529992923], {icon: beverage1}).addTo(myMap)+rando;
	L.marker([42.368420006150856, -71.12840652215823], {icon: beverage1}).addTo(myMap)+rando;
	L.marker([42.367791024077945, -71.1290877942094], {icon: beverage1}).addTo(myMap)+rando;

	//Food
	L.marker([42.37088121459926, -71.12732290971621], {icon: food1}).addTo(myMap)+rando;
	L.marker([42.3701123450232, -71.1287069295679], {icon: food1}).addTo(myMap)+rando;
	L.marker([42.37013612463567, -71.12723707902774], {icon: food1}).addTo(myMap)+rando;
	L.marker([42.36879652576936, -71.12829923379763], {icon: food1}).addTo(myMap)+rando;
	L.marker([42.368241653966315, -71.12990855920657], {icon: food1}).addTo(myMap)+rando;

	//Comfort
	L.marker([42.36973186999948, -71.12695812929019], {icon: comfort1}).addTo(myMap)+rando;
	L.marker([42.36952974170571, -71.12794518220767], {icon: comfort1}).addTo(myMap)+rando;
	L.marker([42.36910170317181, -71.12723305345457], {icon: comfort1}).addTo(myMap)+rando;
	L.marker([42.36870140523696, -71.12586110128382], {icon: comfort1}).addTo(myMap)+rando;
	L.marker([42.367306116926876, -71.12949400407342], {icon: comfort1}).addTo(myMap)+rando;
	L.marker([42.36893670440078, -71.12649529439477], {icon: comfort1}).addTo(myMap)+rando;

	//Sponsors
	L.marker([42.370809876581205, -71.1289188195608], {icon: sponsor1}).addTo(myMap)+rando;
	L.marker([42.37001722648343, -71.12800686849573], {icon: sponsor1}).addTo(myMap)+rando;
	L.marker([42.36950199855593, -71.12955449857805], {icon: sponsor1}).addTo(myMap)+rando;
	L.marker([42.36926419962553, -71.12794517316911], {icon: sponsor1}).addTo(myMap)+rando;

	//Restroom
	L.marker([42.37030258167102, -71.12952231206987], {icon: restroom1}).addTo(myMap)+rando;
	L.marker([42.370570714130274, -71.12980126180736], {icon: restroom1}).addTo(myMap)+rando;
	L.marker([42.36836848223931, -71.12807391920182], {icon: restroom1}).addTo(myMap)+rando;
	L.marker([42.36839226251198, -71.12548826971147], {icon: restroom1}).addTo(myMap)+rando;

	//VIP
	L.marker([42.37180067513713, -71.12926482000444], {icon: vip1}).addTo(myMap)+rando;
	L.marker([42.37196712776105, -71.12793444433305], {icon: vip1}).addTo(myMap)+rando;
	L.marker([42.36999344682611, -71.12950085439775], {icon: vip1}).addTo(myMap)+rando;
	L.marker([42.36742026865225, -71.12910497477111], {icon: vip1}).addTo(myMap)+rando;

	L.marker([42.371055596078655, -71.12923264253482], {icon: plantinum}).addTo(myMap)+rando;

	//Extraneous Items
	var extraIcon = L.Icon.extend({

		options: {

			// shadowUrl: 'icon-shadow.png',
			iconSize:     [20,20],
			//shadowSize:   [62, 18],
			iconAnchor:   [10,20],
			//shadowAnchor: [20, 62],
			popupAnchor:  [-3, -76]
		}

	});

	var wifi1 = new extraIcon({iconUrl: 'assets/wifi.png'}),
		wifi2 = new extraIcon({iconUrl: 'assets/wifi.png'}),
		ferrisWheel = new extraIcon({iconUrl: 'assets/ferrisWheel.png', iconSize: [60,40], iconAnchor: [ 30,60]});


	L.icon = function (options) {
		return new L.Icon(options);
	}

	L.marker([42.370078137007596, -71.12756817800073], {icon: wifi1}).addTo(myMap);
	L.marker([42.37110857918493, -71.12945467839893], {icon: wifi2}).addTo(myMap);
	L.marker([42.37127503364314, -71.12960488210376], {icon: ferrisWheel}).addTo(myMap);

	//add GeoJSON layer
	var myLines = [{
	    "type": "LineString",

		"coordinates":	[
						[-71.1284257352807, 42.36664637930398],
						[-71.1278678358056, 42.36728053421158],
						[-71.12765325908441, 42.367534194382145],
						[-71.12833990459222, 42.367882975444196],
						[-71.1284257352807, 42.36804151165042],
						[-71.12836092460498, 42.36826716556971],
						[-71.1279317711626, 42.36827509234102],
						[-71.12781643617495, 42.36842468488626],
						[-71.12694740045413, 42.367953041374236],
						[-71.12662553537234, 42.368270113032935],
						[-71.12738191831454, 42.36870066463856],
						[-71.1269054446974, 42.36921080308491],
						[-71.12693669178475, 42.36941156954574],
						[-71.1266471808492, 42.36954022849514]
					]



	}];

	var myStyle = {
	    color: "#990000",
		fillColor: "#990000",
	    "weight": 3,
	    "opacity": 0.65,

	};

	L.geoJSON(myLines, {style: myStyle}).addTo(myMap);

	var polygon = L.polygon([
    [42.36688053081571, -71.12529085330948],
    [42.36808541517558, -71.12415359668717],
    [42.36821224376386, -71.12413648074795],
	[42.36900857384311, -71.12608791024746],
	[42.369610998503255, -71.12673164041104],
	[42.37181455527771, -71.12746120126309],
	[42.37226331257368, -71.127804524017],

	[42.372175, -71.1289],
	[42.372135, -71.1294],
	[42.372015, -71.129435],
	[42.372065, -71.12973],
	[42.37143409056534, -71.12992777232904],
	[42.370324388655916, -71.1298848569848],
	[42.370324388655916,-71.1298848569848],
	[42.36905613389564, -71.12997068767328],
	[42.368390289895714, -71.13022817973871],
	[42.368326875813345, -71.12997068767328],
	[42.368326875813345, -71.12997068767328],
	[42.367407364424885, -71.13027109508295],
	[42.36686833424982, -71.12894071941156],
	[42.36661467139054, -71.12894071941156],
	[42.366519547554255,-71.12859739665765],
	[42.36664637930398, -71.1284257352807],

], {
    color: '#990000',
    // fillColor: '#fff', //'#b266ff',
    fillOpacity: 0.1,
    radius: 500
}).addTo(myMap);


	// run code
	init();
})();

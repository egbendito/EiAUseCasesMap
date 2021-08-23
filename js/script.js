var map = new L.Map('leaflet', {
	layers: [
		new L.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			'attribution': 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
		})
	],
	center: [0, 0],
	zoom: 3
});

var bounds_group = new L.featureGroup([]);

var sidebar = L.control.sidebar('sidebar', {
		position: 'left'
});

map.addControl(sidebar);

// Style
function styleUC(feature) {
		if (['GHA', 'NGA', 'MEX', 'ETH', 'IND', 'RWA', 'PER', 'COL', 'KHM', 'EGY'].includes(feature.properties['iso3'])) {
			return {
				color: 'rgba(89,85,88,0.8)',
				fillOpacity: 0.7,
				fillColor: 'rgba(215,25,28,1.0)',
				interactive: true,
			};
		}
		else if (['COD', 'ZMB', 'MOZ', 'MWI', 'VNM'].includes(feature.properties['iso3'])) {
			return {
				color: 'rgba(89,85,88,0.8)',
				fillOpacity: 0.7,
				fillColor: 'rgba(50,168,82,1.0)',
				interactive: true,
			};
		}
		else if (['MAR'].includes(feature.properties['iso3'])) {
			return {
				color: 'rgba(89,85,88,0.8)',
				fillOpacity: 0.7,
				fillColor: 'rgba(240,237,67,1.0)',
				interactive: true,
			};
		}
		else {
			return {
				color: 'rgba(89,85,88,0)',
				fill: false,
			};
		};
	};

// Content
// 'GHA', 'NGA', 'MEX', 'ETH', 'IND', 'RWA', 'PER', 'COL', 'KHM', 'EGY'
function contentUC(feature,layer) {
		if (['GHA'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/gha.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block;"><h1>&nbsp &nbsp Ghana Use Cases</h1></div>\
								<hr size="1" width="100%" color="#a84f42">\
								<h2>Current Use Cases</h2>\
								<div style=display:inline-block;vertical-align:top;><img src="img/isdaxgha.png" width="75px"><h3><b>Testing hyperlocal digital agronomic advisory services and their delivery.</b></h3></div>\
								<div style=display:inline-block;vertical-align:top;><img src="img/wcxgha.png" width="150px"><h3><b>Cropping calendar advisories for smallholder maize farmers and extension agents in the Guinea savannah zone.</b></h3></div>\
								<h2>Advanced Use Cases</h2>\
								<div style=display:inline-block;vertical-align:top;><img src="img/esokoxgha.png" width="150px"><h3><b>Ghana soil fertiliser advisory: Digital Fertilizer advisory & Agronomic advice.</b></h3></div>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['NGA'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
						<p><b>SAA Nigeria: </b>Co-development of digital solutions to deliver fertilizer recommendations and time of planting advice for rice, maize and cassava.</p>\
						<p><b>Current UC: </b>' + (feature.properties['lithium_production_ton'] !== null ? Autolinker.link(feature.properties['lithium_production_ton'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' tons</p>\
						<p><b>Lithium Global Production: </b>' + (feature.properties['lithium_production_perc'] !== null ? Autolinker.link(feature.properties['lithium_production_perc'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' %</p>\
						</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['MEX', 'COL', 'PER'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
						<p><b>Govt LatAm: </b>Smart farming systems at the local level: Sustainability assessment and targeted data-driven recommendations for smallholder farmers.</p>\
						<p><b>Current UC: </b>' + (feature.properties['lithium_production_ton'] !== null ? Autolinker.link(feature.properties['lithium_production_ton'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' tons</p>\
						<p><b>Lithium Global Production: </b>' + (feature.properties['lithium_production_perc'] !== null ? Autolinker.link(feature.properties['lithium_production_perc'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' %</p>\
						</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['ETH'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
						<p><b>DigitalGreen Ethiopia: </b>Co-development of agronomy and climate advisory tools for the production of high quality wheat.</p>\
						<p><b>Fertilizer Ethiopia: </b>Co-development of landscape specific fertilizer advisory services to improve NUE, reduce cost and enhance productivity.</p>\
						<p><b>Current UC: </b>' + (feature.properties['lithium_production_ton'] !== null ? Autolinker.link(feature.properties['lithium_production_ton'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' tons</p>\
						<p><b>Lithium Global Production: </b>' + (feature.properties['lithium_production_perc'] !== null ? Autolinker.link(feature.properties['lithium_production_perc'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' %</p>\
						</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['RWA'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
						<p><b>iSDA Rwanda: </b>Accelerating the use of digital tools for delivering agronomic advice in ...</p>\
						<p><b>Current UC: </b>' + (feature.properties['lithium_production_ton'] !== null ? Autolinker.link(feature.properties['lithium_production_ton'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' tons</p>\
						<p><b>Lithium Global Production: </b>' + (feature.properties['lithium_production_perc'] !== null ? Autolinker.link(feature.properties['lithium_production_perc'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' %</p>\
						</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['EGY'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
						<p><b>Govt. of Egypt: </b>Web/-based advisory for in-season yield potential & water productivity of irrigated wheat-based systems.</p>\
						<p><b>Current UC: </b>' + (feature.properties['lithium_production_ton'] !== null ? Autolinker.link(feature.properties['lithium_production_ton'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' tons</p>\
						<p><b>Lithium Global Production: </b>' + (feature.properties['lithium_production_perc'] !== null ? Autolinker.link(feature.properties['lithium_production_perc'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' %</p>\
						</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['IND'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
						<p><b>Govt. India: </b>Managing time in the rice-based cropping systems of South Asia.</p>\
						<p><b>Current UC: </b>' + (feature.properties['lithium_production_ton'] !== null ? Autolinker.link(feature.properties['lithium_production_ton'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' tons</p>\
						<p><b>Lithium Global Production: </b>' + (feature.properties['lithium_production_perc'] !== null ? Autolinker.link(feature.properties['lithium_production_perc'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' %</p>\
						</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['KHM'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
						<p><b>DSRC Cambodia: </b>Optimizing rice productivity, profitability and environmental sustainability using mechanized and precise direct-seeded rice.</p>\
						<p><b>Current UC: </b>' + (feature.properties['lithium_production_ton'] !== null ? Autolinker.link(feature.properties['lithium_production_ton'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' tons</p>\
						<p><b>Lithium Global Production: </b>' + (feature.properties['lithium_production_perc'] !== null ? Autolinker.link(feature.properties['lithium_production_perc'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' %</p>\
						</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['COD', 'ZMB', 'MOZ', 'MWI'].includes(feature.properties['iso3'])) {
			var ac = '<div width="300px" height="300px">\
						<p><b>Advanced UC: </b>' + (feature.properties['lithium_production_ton'] !== null ? Autolinker.link(feature.properties['lithium_production_ton'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' tons</p>\
						<p><b>Lithium Global Production: </b>' + (feature.properties['lithium_production_perc'] !== null ? Autolinker.link(feature.properties['lithium_production_perc'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' %</p>\
						</div>';
			layer.on('click', function() {
				sidebar.setContent(ac).show();
			});
		}
		else if (['MAR'].includes(feature.properties['iso3'])) {
			var dc = '<div width="300px" height="300px">\
						<p><b>Developing UC: </b>' + (feature.properties['lithium_production_ton'] !== null ? Autolinker.link(feature.properties['lithium_production_ton'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' tons</p>\
						<p><b>Lithium Global Production: </b>' + (feature.properties['lithium_production_perc'] !== null ? Autolinker.link(feature.properties['lithium_production_perc'].toLocaleString(), {truncate: {length: 30, location: 'smart'}}) : '') + ' %</p>\
						</div>';
			layer.on('click', function() {
				sidebar.setContent(dc).show();
			});
		}
		else {};
	};

// Set data
var uc = new L.geoJSON(json_rmis_data_0, {
	interactive: true,
	style: styleUC,
	onEachFeature: contentUC,
});

// Add data to the map
map.addLayer(uc);

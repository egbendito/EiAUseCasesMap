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
		else if (['COD', 'ZMB', 'MOZ', 'MWI'].includes(feature.properties['iso3'])) {
			return {
				color: 'rgba(89,85,88,0.8)',
				fillOpacity: 0.7,
				fillColor: 'rgba(50,168,82,1.0)',
				interactive: true,
			};
		}
		else if (['MAR', 'VNM', 'KEN'].includes(feature.properties['iso3'])) {
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
								<hr size="2" width="100%" color="#a84f42">\
								<div style="display:inline-block;""><h2>Current Use Cases &nbsp &nbsp</h2></div>\
								<img src="img/launch.png" width="30px" heigth="30px"></div>\
								<h3><b>Testing hyperlocal digital agronomic advisory services and their delivery.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								<hr size="1" width="100%" color="#dedede">\
								<div style=display:inline-block;vertical-align:top;><img src="img/worldcover.png" width="200px" class="icenter"><h3><b>Cropping calendar advisories for smallholder maize farmers and extension agents in the Guinea savannah zone.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
									<td><img src="img/8.png" style="width:50%; height:50%;" class="icenter"></td>\
									<td><img src="img/8.png" style="width:50%; height:50%;" class="icenter"></td>\
									<td><img src="img/8.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								<hr size="1" width="100%" color="#424242">\
								<div style="display:inline-block;vertical-align:center;"><h2>Use Cases in Development &nbsp &nbsp</h2></div>\
								<div style=display:inline-block;vertical-align:center;><img src="img/process.png" width="30px" heigth="30px"></div>\
								<div style=display:inline-block;vertical-align:top;><img src="img/esoko.png" width="200px" class="icenter"><h3><b>Ghana soil fertiliser advisory: Digital Fertilizer advisory & Agronomic advice.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
									<td><img src="img/3.png" style="width:50%; height:50%;" class="icenter"></td>\
									<td><img src="img/3.png" style="width:50%; height:50%;" class="icenter"></td>\
									<td><img src="img/3.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['NGA'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/nga.png" width="100px" heigth="200px"></div>\
								<div style="display:inline-block;"><h1>&nbsp &nbsp Nigeria Use Cases</h1></div>\
								<hr size="2" width="100%" color="#a84f42">\
								<div style="display:inline-block;""><h2>Current Use Cases &nbsp &nbsp</h2></div>\
								<img src="img/launch.png" width="30px" heigth="30px"></div>\
								<div style=display:inline-block;vertical-align:top;><img src="img/saaxnga.png" width="150px" class="icenter"><h3><b>Co-development of digital solutions to deliver fertilizer recommendations and time of planting advice for rice, maize and cassava.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								<hr size="1" width="100%" color="#424242">\
								<div style="display:inline-block;vertical-align:center;"><h2>Finalizing due dilligence &nbsp</h2></div>\
								<div style=display:inline-block;vertical-align:center;><img src="img/process.png" width="30px" heigth="30px"></div>\
								<div style=display:inline-block;vertical-align:top;><img src="img/mercy.png" width="150px" style="width:40%; height:40%; display:block; margin-left: 50%;"><h3><b>Decision Support Tools for Various Users.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['MEX', 'COL', 'PER'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/mex_per_col.png" width="400px" heigth="300px"></div>\
								<div style="text-align: center;"><h1>LatAm Use Cases</h1></div>\
								<hr size="2" width="100%" color="#a84f42">\
								<div style="display:inline-block;""><h2>Current Use Cases &nbsp &nbsp</h2></div>\
								<img src="img/launch.png" width="30px" heigth="30px"></div>\
								<div><h3><b>Govts. of Mexico, Peru and Colombia</div>\
								<div><h3><b>Smart farming systems at the local level: Sustainability assessment and targeted data-driven recommendations for smallholder farmers.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['ETH'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/eth.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block;"><h1>&nbsp &nbsp Ethiopia Use Cases</h1></div>\
								<hr size="2" width="100%" color="#a84f42">\
								<div style="display:inline-block;""><h2>Current Use Cases &nbsp &nbsp</h2></div>\
								<img src="img/launch.png" width="30px" heigth="30px"></div>\
								<div style=display:inline-block;vertical-align:top;><img src="img/digitalgreen.png" width="150px" class="icenter"><h3><b>Co-development of agronomy and climate advisory tools for the production of high quality wheat.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								<hr size="1" width="100%" color="#dedede">\
								<div style=display:inline-block;vertical-align:top;><img src="img/ministryAgricultureETH.png" width="200px" class="icenter"><h3><b>Co-development of landscape specific fertilizer advisory services to improve NUE, reduce cost and enhance productivity.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['RWA'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/rwa.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block;"><h1>&nbsp &nbsp Rwanda Use Cases</h1></div>\
								<hr size="2" width="100%" color="#a84f42">\
								<div style="display:inline-block;""><h2>Current Use Cases &nbsp &nbsp</h2></div>\
								<img src="img/launch.png" width="30px" heigth="30px"></div>\
								<div><h3><b>Accelerating the use of digital tools for delivering agronomic advice in potato-based cropping systems​.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['EGY'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/egy.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block;"><h1>&nbsp &nbsp Egypt Use Cases</h1></div>\
								<hr size="2" width="100%" color="#a84f42">\
								<div style="display:inline-block;""><h2>Current Use Cases &nbsp &nbsp</h2></div>\
								<img src="img/launch.png" width="30px" heigth="30px"></div>\
								<div><h3><b>Govt. of Egypt</div>\
								<div><h3><b>Accelerating the use of digital tools for delivering agronomic advice in potato-based cropping systems​.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['IND'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/ind.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block;"><h1>&nbsp &nbsp India Use Cases</h1></div>\
								<hr size="2" width="100%" color="#a84f42">\
								<div style="display:inline-block;""><h2>Current Use Cases &nbsp &nbsp</h2></div>\
								<img src="img/launch.png" width="30px" heigth="30px"></div>\
								<div><h3><b>Govt. of India</div>\
								<div><h3><b>Managing time in the rice-based cropping systems of South Asia.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['KHM'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/khm.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block;"><h1>&nbsp Cambodia Use Cases</h1></div>\
								<hr size="2" width="100%" color="#a84f42">\
								<div style="display:inline-block;""><h2>Current Use Cases &nbsp &nbsp</h2></div>\
								<img src="img/launch.png" width="30px" heigth="30px"></div>\
								<div style=display:inline-block;vertical-align:top;><img src="img/dsrc.png" width="150px" class="icenter"><h3><b>Optimizing rice productivity, profitability and environmental sustainability using mechanized and precise direct-seeded rice.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['COD'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
								<div style="display:inline-block;vertical-align:center;"><img src="img/cod.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block;"><h1>Democratic Republic<br>of Congo Use Cases</h1></div>\
								<hr size="2" width="100%" color="#a84f42">\
								<div style="display:inline-block;vertical-align:center;"><h2>Use Cases in Development &nbsp</h2></div>\
								<div style=display:inline-block;vertical-align:center;><img src="img/process.png" width="30px" heigth="30px"></div>\
								<div style=display:inline-block;vertical-align:top;><img src="img/olam.png" width="150px" class="icenter"><h3><b>Decision Support Tools for intensification & diversification of organic coffee and banana.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['ZMB', 'MOZ', 'MWI'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/moz_mwi_zam.png" width="400px" heigth="300px"></div>\
								<div style="text-align: center;"><h1>Malawi, Mozambique and Zambia Use Cases</h1></div>\
								<hr size="2" width="100%" color="#a84f42">\
								<div style="display:inline-block;vertical-align:center;"><h2>Use Cases in Development &nbsp</h2></div>\
								<div style=display:inline-block;vertical-align:center;><img src="img/process.png" width="30px" heigth="30px"></div>\
								<div style=display:inline-block;vertical-align:top;><img src="img/solidaridad.png" width="150px" class="icenter"><h3><b>Incorporating practices data as part of feedback in hyperlocal digital advisory.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['KEN'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/ken.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block;"><h1>&nbsp &nbsp Kenya Use Cases</h1></div>\
								<hr size="2" width="100%" color="#a84f42">\
								<div style="display:inline-block;vertical-align:center;"><h2>Finalizing due dilligence &nbsp</h2></div>\
								<div style=display:inline-block;vertical-align:center;><img src="img/process.png" width="30px" heigth="30px"></div>\
								<div style=display:inline-block;vertical-align:top;><img src="img/mercy.png" width="150px" style="width:40%; height:40%; display:block; margin-left: 50%;"><h3><b>Decision Support Tools for Various Users.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['VNM'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/vnm.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block;"><h1>&nbsp &nbsp Vietnam Use Cases</h1></div>\
								<hr size="2" width="100%" color="#a84f42">\
								<div style="display:inline-block;vertical-align:center;"><h2>Finalizing due dilligence &nbsp</h2></div>\
								<div style=display:inline-block;vertical-align:center;><img src="img/process.png" width="30px" heigth="30px"></div>\
								<div style=display:inline-block;vertical-align:top;><img src="img/dsrc.png" width="150px" class="icenter"><h3><b>Optimization of Rice Production Via Mechanization.</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
			});
		}
		else if (['MAR'].includes(feature.properties['iso3'])) {
			var cc = '<div width="300px" height="300px">\
								<div style=display:inline-block;vertical-align:top;><img src="img/mar.png" width="100px" heigth="100px"></div>\
								<div style="display:inline-block;"><h1>&nbsp Morocco Use Cases</h1></div>\
								<hr size="2" width="100%" color="#a84f42">\
								<div style="display:inline-block;vertical-align:center;"><h2>Finalizing due dilligence &nbsp</h2></div>\
								<div style=display:inline-block;vertical-align:center;><img src="img/process.png" width="30px" heigth="30px"></div>\
								<div><h3><b>Govt. of Morocco</div>\
								<div><h3><b>CA Agriculture Mechanization and Agronomy Package</b></h3></div>\
								<table style="width:100%">\
								  <tr>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								    <td><img src="img/6.png" style="width:50%; height:50%;" class="icenter"></td>\
								  </tr>\
								</table>\
								</div>';
			layer.on('click', function() {
				sidebar.setContent(cc).show();
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

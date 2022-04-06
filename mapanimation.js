mapboxgl.accessToken = 'pk.eyJ1Ijoic2R1bmxhcCIsImEiOiJjbDFqbm5yY2IwbHRrM2tuMXhxeHczZDJzIn0.9iCF_Hc8tPulyaIi0r2B5w';
const markers = [];

	// On first load, populates the markers array with the buses' initial positions
async function init() {
	let locations = await getBusLocations();
	locations.forEach(bus => {
		let popup = new mapboxgl.Popup({offset: 25, closeButton: false});
		popup.setText(`Route: ${bus.routeNumber}`);
		let marker = new mapboxgl.Marker();
		marker.setLngLat([bus.lng, bus.lat]);
		marker.setPopup(popup);
		markers.push(marker);
		marker.addTo(map);
	})
	run();
}

	// Create map
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-122.47612492442741, 48.75003918525812],
	zoom: 12
})

async function run(){
    // get bus data    
	const locations = await getBusLocations();
		// update bus marker locations
	locations.forEach(bus => {
		let i = locations.indexOf(bus);
		markers[i].setLngLat([bus.lng, bus.lat]);
		markers[i].getPopup().setText(`Route: ${bus.routeNumber}`);
	})

	// recursive calls to update every 15 seconds
	setTimeout(run, 15000);
}

// Request bus data from WTA
async function getBusLocations(){
	const url = 'https://api.ridewta.com/vehicles';
	const response = await fetch(url);
	const json     = await response.json();
	// Only fixed route buses, no paratransit or support vehicles
	const fixedRouteBuses = json.vehicles.filter(vehicle => {
		if (vehicle.vehicleGroup == "fixedRoute") return true;
	})
	return fixedRouteBuses;
}